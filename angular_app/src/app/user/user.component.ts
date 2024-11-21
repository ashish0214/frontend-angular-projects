import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'
import { CardComponent } from "../shared/card/card.component";

const randomUser= Math.floor(Math.random() * DUMMY_USERS.length)

interface User{
      id:string,
      name: string,
      avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //practise other topics 

  //before angular there was a zone.js package was used to see what data are getting changedand update according to it

  /*signal is used whenever the data is changed then it trigger
   all the areas where the value was used  
   (signal is like a model that moniters the data which is marked using signal  )
  It was introduced in angular 16
   */
//  selectedUser=signal( DUMMY_USERS[randomUser])

 //before
//  get userImagePath(){
//   return 'assets/users'+ this.selectedUser().avatar;
//  }

//after
// userImagePath=computed(()=>'assets/users'+ this.selectedUser().avatar)

//  onSelectedUser(){
//   const randomUser= Math.floor(Math.random() * DUMMY_USERS.length)
//   this.selectedUser.set(DUMMY_USERS[randomUser])
//  }
@Input({required:true}) user!:User;
@Input({required:true}) selected!: boolean;

//creating an eventEmitter for emmiting output to the main app
@Output() select=new EventEmitter();

get userImagePath(){
  return './assets/users/'+ this.user.avatar;
}

onSelectuser(){
  this.select.emit(this.user.id)
}

}
