// src/app/model/task.model.ts

import { TaskStatus } from './task-status.enum';

export class Task {
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus,
    public creation_date: Date
  ) {}
}

export { TaskStatus };
