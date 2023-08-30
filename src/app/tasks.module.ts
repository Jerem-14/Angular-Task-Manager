import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TextColorDirective } from './text-color.directive';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    MainTaskComponent,
    TaskComponent,
    TaskListComponent,
    TextColorDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
