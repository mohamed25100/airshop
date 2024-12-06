import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './components/auth/auth.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { ProgramsComponent } from './components/programs/programs.component';

const routes: Routes = [
  {path: "aircrafts", component: AircraftsComponent, canActivate: [AuthGuard]},
  {path: "auth", component: AuthComponent, canActivate: [NoAuthGuard]},
  {path: 'programs/:msn', component: ProgramsComponent},
  {path: "**", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
