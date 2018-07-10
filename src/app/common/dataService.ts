import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from './applicant';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    getApplicantsList() {
        //   http call
        return this.http.get("https://drrs.herokuapp.com/getApplicantsList");
    }

    saveApplicant(data: Applicant) {
        //   http call
        return this.http.post("https://drrs.herokuapp.com/#########", data);
    }
}

