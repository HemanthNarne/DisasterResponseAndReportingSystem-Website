import { Component, OnInit, ViewChild } from '@angular/core';
import { Incident } from '../common/incident';
import { MatTableDataSource, MatSort, MatDatepickerInputEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-archived-incidents',
  templateUrl: './archived-incidents.component.html',
  styleUrls: ['./archived-incidents.component.css']
})
export class ArchivedIncidentsComponent implements OnInit {

  incidents: Incident[];
  events: string[] = []; // for date filter
  displayedColumns = ['incidentName', 'location', 'date', 'time', 'description'];
  dataSource: MatTableDataSource<Incident>
  selection = new SelectionModel<Incident>(true, []);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIncidentsList()
      .subscribe((data) =>{
        this.incidents = data['data'];
        this.dataSource = new MatTableDataSource<Incident>(this.incidents);
        // console.log(this.incidents)
      });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(type + " " + event.value);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
