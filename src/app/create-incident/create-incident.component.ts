import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreate(createInc){
    alert("Incident module created successfully");
    this.router.navigate(['/dashboard']);
    
  }

}
