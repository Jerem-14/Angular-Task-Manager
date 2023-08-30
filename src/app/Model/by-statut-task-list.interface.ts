// src/app/models/by-statut-task-list-service.interface.ts

import { Task } from './task.model';
import { CRUDTaskListInterface } from './crud-task-list.interface';
import { TaskStatus } from './task-status.enum';

export interface ByStatutTaskListInterface extends CRUDTaskListInterface {
  getTasksByStatus(status: TaskStatus): Task[];
}
