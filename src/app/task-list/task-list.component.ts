import { Component, OnInit } from '@angular/core';
import { TaskList } from '../Model/task-list.model';
import { Etat, Task } from '../Model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList!: TaskList;

  ngOnInit(): void {
    this.taskList = new TaskList([
      new Task('Tâche 1', 'Description 1', Etat.EN_COURS),
      new Task('Tâche 2', 'Description 2', Etat.A_FAIRE),
      new Task('Tâche 3', 'Description 3', Etat.TERMINEE)
    ]);
  }
}
