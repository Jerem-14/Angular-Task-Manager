import { Injectable } from '@angular/core';
import { Task } from './model/task.model';
import { ByStatutTaskListInterface } from './model/by-statut-task-list.interface';
import { CRUDTaskListInterface } from './model/crud-task-list.interface';
import { TaskStatus } from './model/task-status.enum';
import { CRUDTaskListService } from './crudtask-list.service';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService implements ByStatutTaskListInterface {
  constructor(private crudService: CRUDTaskListService) {}

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.crudService.readTasks().filter(task => task.status === status);
  }

  createTask(task: Task): void {
    this.crudService.createTask(task);
  }

  readTasks(): Task[] {
    return this.crudService.readTasks();
  }

  updateTask(task: Task): void {
    this.crudService.updateTask(task);
  }

  deleteTask(task: Task): void {
    this.crudService.deleteTask(task);
  }
}
