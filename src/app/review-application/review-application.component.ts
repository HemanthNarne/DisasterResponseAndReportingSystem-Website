// Assigned to Kishan

import { Component, OnInit, ViewChild } from '@angular/core';
import { applicant } from '../common/mock-applicants';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Applicant } from '../common/applicant';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'email', 'dob', 'county', 'skills'];
  
  dataSource = new MatTableDataSource<Applicant>(applicant);
  selection = new SelectionModel<Applicant>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
   
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    console.log(row);
    confirm("First Name: " + row.firstName +"\n"+
            "Last Name: " + row.lastName +"\n"+
            "County: " + row.countys
  );
  }
}
