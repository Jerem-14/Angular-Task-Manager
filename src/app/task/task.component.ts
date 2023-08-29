import { Component, OnInit, Input } from '@angular/core';
import { Task, Etat } from '../Model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html', 
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() task!: Task;

  ngOnInit(): void {
    this.task = new Task(
      'Tâche 1',
      'Description de la tâche 1',
      Etat.EN_COURS
    );
  }
}
