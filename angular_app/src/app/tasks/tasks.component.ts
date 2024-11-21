import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task.model';
import { CardComponent } from "../shared/card/card.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input() name!: string;
  onAddingTask=false;
   
 
  constructor(private taskService: TaskService){}


  get userRelatedtask(){
    return this.taskService.taskByUserId(this.userId)
  }
  
  onAddtask(){
    this.onAddingTask=true;
  }
  
  onCancleAddTask(){
    this.onAddingTask=false;
  }
  
  
}
