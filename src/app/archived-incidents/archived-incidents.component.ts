import { Component, OnInit } from '@angular/core';
import { Incident } from '../common/incident';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../common/dataService';

@Component({
  selector: 'app-archived-incidents',
  templateUrl: './archived-incidents.component.html',
  styleUrls: ['./archived-incidents.component.css']
})
export class ArchivedIncidentsComponent implements OnInit {

  incidents: Incident[];
  displayedColumns = ['incidentName', 'location', 'date', 'time', 'description'];
  dataSource: MatTableDataSource<Incident>
  selection = new SelectionModel<Incident>(true, []);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getIncidentsList()
      .subscribe((data) =>{
        this.incidents = data['data'];
        this.dataSource = new MatTableDataSource<Incident>(this.incidents);
        // console.log(this.incidents)
      });
  }

}
