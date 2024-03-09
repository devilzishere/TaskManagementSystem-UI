import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks'; 
  private tasks: Task[] = [];

  getAllTasks(): Observable<Task[]> {
    // In a real application, this would fetch tasks from a backend API
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(taskId: any): Observable<Task> {
    // In a real application, this would fetch a specific task from a backend API
    return this.http.get<Task>(`${this.apiUrl}/${taskId}`);
  }

  createTask(newTask: Task): Observable<Task> {
    // In a real application, this would send the new task to a backend API for creation
    // For simplicity, we'll just add it to the local array
    return this.http.post<Task>(this.apiUrl,newTask);
  }

  // updateTask(updatedTask: Observable<Task>): void {
  //   // In a real application, this would send the updated task to a backend API for updating
  //   // For simplicity, we'll find the task in the local array and update it
  //   const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
  //   if (index !== -1) {
  //     this.tasks[index] = updatedTask;
  //   }
  // }


  constructor(private http: HttpClient) { }
}
