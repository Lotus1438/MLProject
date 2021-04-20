import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor(private http: HttpClient) {}

  private url = 'http://127.0.0.1:8000/api/';

  sendEmail(data: any) {
    return this.http.post(this.url + 'sending/emails', { data });
  }

  getAllEmails() {
    return this.http.get(this.url + 'getting/emails');
  }

}


