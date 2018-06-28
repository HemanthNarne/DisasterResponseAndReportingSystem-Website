export class Applicant {

    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    county: string;
    phone: string;
    skills: string;
    lisence: string;
    certification: string;
    fileUpload: string;
    limitations: string;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
