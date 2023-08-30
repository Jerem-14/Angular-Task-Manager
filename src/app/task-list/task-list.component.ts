import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../model/task-list.model';
import { TaskStatus } from '../model/task-status.enum';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList!: TaskList;

  archivedTasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.archivedTasks = this.getArchivedTasks();
  }

  getArchivedTasks(): Task[] {
    return this.taskList.tasks.filter(task => task.status === TaskStatus.TERMINEE);
  }
}
