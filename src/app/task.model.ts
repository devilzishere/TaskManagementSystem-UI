// task.model.ts

export interface Task {
    id?: number;  // Optional ID, as it might not be available for a new task
    name: string;
    description: string;
    dueDate: Date;
    completed?: boolean;
  }
  