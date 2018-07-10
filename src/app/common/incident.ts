export class Incident {

incidentID: string;
  incidentName:  string;
  location: string;
  date: string;
  time: string;
  description: string;

  constructor(values: Object = {}) {
    /*Constructor initialization*/
    Object.assign(this, values);
}
}