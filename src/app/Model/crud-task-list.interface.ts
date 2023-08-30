// src/app/models/crud-task-list-service.interface.ts

import { Task } from './task.model';

export interface CRUDTaskListInterface {
  createTask(task: Task): void;
  readTasks(): Task[];
  updateTask(task: Task): void;
  deleteTask(task: Task): void;
}
