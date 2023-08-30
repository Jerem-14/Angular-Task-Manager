import { Injectable } from '@angular/core';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { CRUDTaskListService } from './crudtask-list.service';
import { Task, TaskStatus } from './model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {
  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ) {}

  createTask(task: Task): void {
    this.crudService.createTask(task);
  }

  getAllTasks(): Task[] {
    return this.crudService.readTasks();
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.byStatutService.getTasksByStatus(status);
  }

  // Implémentez les autres méthodes nécessaires ici
}
