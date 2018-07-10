import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getApplicantsList() {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getApplicantsList");
    }

    getIncidentsList() {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getIncidentsList");
    }
}

