import { Injectable } from '@angular/core';
import { EmailRequest } from './models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {



  private emails:EmailRequest[] = [
    { firstName:'Juan', lastName:'Luna', status: true, feedback: 'asddffdgsgf' },
    { firstName:'Jose', lastName:'Rizal', status: true, feedback: 'ahtdthdhtghy' },
    { firstName:'Pedro', lastName:'Penduko', status: true, feedback: 'asrtytfufvhj' },
    { firstName:'Uzumaki', lastName:'Naruto', status: true, feedback: 'htshtgjhf' },
    { firstName:'Cloud', lastName:'Strife', status: true, feedback: 'kufhgfjhj' },
  ]

  constructor() { }

  getEmails(){
    return this.emails;
  }

}
