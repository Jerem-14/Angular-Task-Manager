// model/task-list.model.ts
import { Task } from './task.model';

export class TaskList {
  constructor(public tasks: Task[]) {}
}
