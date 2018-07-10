import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})
export class CreateTeamsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreate(createTeam){
    alert("Team created successfully");
    this.router.navigate(['/teams']);
    
  }
}
