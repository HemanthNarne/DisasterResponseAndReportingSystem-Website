// Assigned to Kishan

export class Applicant {

    firstName:  string;
    lastName: string;
    email:   string;
    dob: Date;
    mobileNumber: string;
    address1: string;
    address2: string;
    county: string;
    city: string;
    state: string;
    country: string;
    skills: string;
    licenseNumber: string;
    files: string;
    limitations: string;
    pushNotification: string; 

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
