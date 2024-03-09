import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {

  taskId: number = 0;
  editedTask: any;
  idParam: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {
    const navigationState = this.router.getCurrentNavigation()?.extras?.state ?? {};

    if (navigationState) {
      // Your logic here, you can now safely access navigationState without TypeScript errors
      if(navigationState['editFlag'])
        this.editedTask = navigationState['myData'];
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idParam = params['id'];
    });
    // this.route.data.subscribe(data=>{
    //   this.editedTask  = data;
    // })
    // Handle the idParam value here

    // const idParam = this.route.snapshot.paramMap.get('id');

    if (this.idParam !== null) {
      this.taskId = +this.idParam;

      // Call the service method to get the task by ID
      // this.taskService.getTaskById(this.taskId).subscribe(
      //   (task: Task) => {
      //     // Assign the task to editedTask when it's available
      //     this.editedTask = task;
      //   },
      //   (error) => {
      //     // Handle the case where there's an error fetching the task
      //     console.error(`Error fetching task with ID ${this.taskId}: ${error}`);
      //   }
      // );
    } else {
      // Handle the case where idParam is null
      console.error('ID parameter is null.');
    }
  }

  // updateTask(): void {
  //   if (this.editedTask)
  //     this.taskService.updateTask(this.editedTask);
  //   // Implement navigation to the task list view
  // }
}
