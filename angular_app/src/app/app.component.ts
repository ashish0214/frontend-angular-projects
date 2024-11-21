import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular_app';
  users=DUMMY_USERS;
  selectedUserId?: string;
 


  get selectedUserName(){
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }

  onSelecteduser(id:string){
   this.selectedUserId=id;
  }

}
