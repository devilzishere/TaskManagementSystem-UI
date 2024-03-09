import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  

  newTask: Task = {
    name: '',
    description: '',
    dueDate: new Date(),
  };

  constructor(private taskService: TaskService) {}

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe();
    // Implement navigation to the task list view
  }
}
