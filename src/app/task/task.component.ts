import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../model/task-status.enum';
import { Task } from '../model/task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  
  constructor(){

  }
  
  ngOnInit(): void {
    
  }
}
