// Assigned to Kishan

import { Component, OnInit, ViewChild } from '@angular/core';
// import { applicant } from '../common/mock-applicants'; // for mock user
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Applicant } from '../common/applicant';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {

  applicants: Applicant[];
  displayedColumns = ['firstName', 'lastName', 'email', 'county', 'skills'];
  dataSource = new  MatTableDataSource<Applicant>(this.applicants)
  selection = new SelectionModel<Applicant>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;  
  
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getApplicantsList()
      .subscribe((data) =>{
        this.applicants = data['data'];
        this.dataSource = new MatTableDataSource<Applicant>(this.applicants);
      });

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
            "County: " + row.county +"\n"+
            "Phone Number: " + row.skills
  );
  }
}
