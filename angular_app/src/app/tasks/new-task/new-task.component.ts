import { Component, EventEmitter, Input, Output ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  @Input({required:true}) userId!:string;
@Output() close=new EventEmitter<void>();
private taskService=inject(TaskService)

taskTitle='';
taskSummary='';
taskdueDate='';

onCancle(){
  this.close.emit();
}

onSubmit(){
this.taskService.addTask({title:this.taskTitle,
  summary:this.taskSummary,
  dueDate:this.taskdueDate

},this.userId)
this.close.emit();
}

}
