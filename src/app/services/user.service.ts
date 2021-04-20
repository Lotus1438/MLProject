import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://127.0.0.1:8000/api/';

  constructor( private http: HttpClient) { }

  // getAllEmails(url: string) {
  //   return this.http.get(url);
  // }

  getAllEmails() {
    return this.http.get(this.url + 'getting/emails');
  }

}
