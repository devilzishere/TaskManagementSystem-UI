import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [];
  editedTask: any;
  constructor(private taskService : TaskService, private router: Router){}

  ngOnInit(): void{
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  editTask(task: Task): void{
    this.taskService.getTaskById(task.id).subscribe(
      (task: Task) => {
        // Assign the task to editedTask when it's available
        this.editedTask = task;
        this.router.navigate(['/edit', task.id], {state: { myData: task, editFlag: true,},});
      },
      (error) => {
        // Handle the case where there's an error fetching the task
        console.error(`Error fetching task with ID ${1}: ${error}`);
      }
    );
   }

}
