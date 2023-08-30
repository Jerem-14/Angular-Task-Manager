import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../model/task-status.enum';
import { Task } from '../model/task.model';
import { CRUDTaskListService } from 'src/app/crudtask-list.service';
import { ByStatutTaskListService } from 'src/app/by-statut-task-list.service';
import { TaskList } from '../model/task-list.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent implements OnInit {
  taskList: TaskList;

  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ){
    const tasks: Task[] = [
      new Task('Tâche 1', 'Description de la tâche 1', TaskStatus.EN_COURS, new Date(2019, 11, 24)),
      new Task('Tâche 2', 'Description de la tâche 2', TaskStatus.A_FAIRE, new Date()),
      new Task('Tâche 3', 'Description de la tâche 3', TaskStatus.TERMINEE, new Date())
    ];
    this.taskList = new TaskList(tasks);
  }

  ngOnInit(): void {

  }
}
