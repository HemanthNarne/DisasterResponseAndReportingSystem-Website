import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { TeamsComponent } from './teams/teams.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateIncidentComponent,
    ReviewApplicationComponent,
    TeamsComponent,
    CreateTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
