import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy_tasks";
import {type NewTaskData } from "./task.model";

@Injectable({providedIn:'root'})
export class TaskService{
    private tasks=dummyTasks;

    constructor(){
        const tasks=localStorage.getItem('tasks')
        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
    }

    taskByUserId(userId:string){
        return this.tasks.filter((task)=>task.userId===userId)
    }

    removeTask(id :string){
        return this.tasks.filter((task)=>task.id !==id)
        this.saveTaskInLocalStorage();
    }

    addTask(newTaskData: NewTaskData,userId:string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId:userId,
            title:newTaskData.title,
            summary:newTaskData.summary,
            dueDate: newTaskData.dueDate
        })   
        this.saveTaskInLocalStorage();
    }

    private saveTaskInLocalStorage(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
    }
}