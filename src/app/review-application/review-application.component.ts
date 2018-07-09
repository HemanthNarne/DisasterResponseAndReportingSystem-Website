// Assigned to Kishan

import { Component, OnInit, ViewChild } from '@angular/core';
import { applicant } from '../common/mock-applicants';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Applicant } from '../common/applicant';

@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'dob'];
  
  dataSource = new MatTableDataSource<Applicant>(applicant);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
