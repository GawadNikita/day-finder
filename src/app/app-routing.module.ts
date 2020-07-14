import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './app.component';
import {DayFinderComponent} from './pages/day-finder/day-finder.component';

const routes: Routes = [
  {path: '', component: DayFinderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
