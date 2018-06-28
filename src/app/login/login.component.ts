import { Component, OnInit } from '@angular/core';
import { Applicant } from '../common/applicant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable for applicant
  applicant: Applicant;
  // for validation
  isSubmitted = false;

  constructor(private router: Router) { 
    this.applicant = new Applicant({
      email: ''})
  }

  ngOnInit() {
  }

  onLogin({ value, valid }: { value: Applicant, valid: boolean })  {
    console.log(value)
    console.log(valid)
    this.isSubmitted = true;
    if(value){
      console.log(value);
      this.router.navigate(['/dashboard']);     
    } else {
      console.log("something went wrong");
    }
    
  }
}
