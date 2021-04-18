import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailRequest } from './models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private url = "https://jsonplaceholder.typicode.com/posts";
  private url = "http://127.0.0.1:8000/api/";

  private emailRequests:EmailRequest[] = [
    { id: 0, email:'reina.mates@mlhllier.com'},
    { id: 1, email:'rhea-may.ardiente@mlhllier.com'},
    { id: 3, email:'jenie-joy.tomalon@mlhllier.com'},
    { id: 4, email:'jonalyn.mobilla@mlhllier.com'},
    { id: 5, email:'shenna.cañeda@mlhllier.com'},
    { id: 6, email:'quency.atacador@mlhllier.com'},
  ]

  constructor( private http : HttpClient) { }

  // getEmails(){
  //   return this.emailRequests;
  // }

  sendEmail(data:any){
    return this.http.post(this.url+"sending/emails",{data});
  }

  getAllEmails(){
    return this.http.get(this.url+"getting/emails");
  }
}
