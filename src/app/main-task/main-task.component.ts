import { Component, OnInit } from '@angular/core';
import { Task, Etat } from '../Model/task.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  mainTask!: Task;

  ngOnInit(): void {
    this.mainTask = new Task(
      'Tâche principale',
      'Description de la tâche principale',
      Etat.A_FAIRE
    );
  }
}
