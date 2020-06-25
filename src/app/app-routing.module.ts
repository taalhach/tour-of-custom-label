import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LabelsComponent} from './labels/labels.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'labels', component: LabelsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
