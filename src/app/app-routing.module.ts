import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { ProgramsComponent } from './components/programs/programs.component';

const routes: Routes = [
  {path: "aircrafts", component: AircraftsComponent},
  {path: 'programs/:msn', component: ProgramsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
