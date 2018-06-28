import { Component, OnInit } from '@angular/core';
// import { Applicant } from '../common/applicant';
import { applicant } from '../common/mock-applicants';

@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {

  applicants = applicant;
  constructor() { }

  ngOnInit() {
    
  }

}
