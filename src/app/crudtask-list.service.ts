import { Injectable } from '@angular/core';
import { Task } from './model/task.model';
import { CRUDTaskListInterface } from './model/crud-task-list.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskListInterface {
  private tasks: Task[] = []; // Votre liste de tâches

  createTask(task: Task): void {
    this.tasks.push(task);
  }

  readTasks(): Task[] {
    return this.tasks;
  }

  updateTask(task: Task): void {
    // Implémentez la logique de mise à jour ici
  }

  deleteTask(task: Task): void {
    // Implémentez la logique de suppression ici
  }
}
