import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './main-task/main-task.component';

const routes: Routes = [
  { path: 'tasks', loadChildren: () => import('./tasks.module').then(m => m.TasksModule) },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
  //{ path: '', redirectTo: 'tasks', pathMatch: 'full' },
  //{ path: 'tasks', component: MainTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
