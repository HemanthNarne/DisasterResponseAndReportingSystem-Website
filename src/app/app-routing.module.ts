// Assigned to Kishan

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { TeamsComponent } from './teams/teams.component';
import { Team1DetailsComponent } from './team1-details/team1-details.component';
import { ArchivedIncidentsComponent } from './archived-incidents/archived-incidents.component';

const routes: Routes = [
  { path: 'createIncident', component: CreateIncidentComponent },
  { path: 'createTeams', component: CreateTeamsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reviewApplication', component: ReviewApplicationComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'team1Details', component: Team1DetailsComponent },
  { path: 'archivedIncidents', component: ArchivedIncidentsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
