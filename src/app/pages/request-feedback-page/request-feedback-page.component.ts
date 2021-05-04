import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import axios from 'axios';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-feedback-page',
  templateUrl: './request-feedback-page.component.html',
  styleUrls: ['./request-feedback-page.component.css']
})
export class RequestFeedbackPageComponent implements OnInit {

  constructor(private service : EmailService, private router : Router) { }

  selectForm = new FormGroup ({
    select: new FormControl (' ', [Validators.required]),
  })

  emails : any;
  myArray : Array<string> = [];
  cnt : number = 0;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('Username'));
    this.getEmails();
    (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = true;
  }

  getEmails(){
    const test = window.localStorage.getItem('EMAIL_TOKEN');
    let name:string = test!;
    const AuthStr = 'Bearer '.concat(name);
    axios.get("https://mlback-end.herokuapp.com/api/email", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.emails = response.data;
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }

  Check(event:MatCheckboxChange): void {
    var id = event.source.id.split('-')[2];
    var index = Number(id);
    var data = document.getElementsByClassName('example-margin');
    var element =  (<HTMLInputElement> document.getElementById("btnsend-request"));
    var email = data[index-1].parentElement?.parentElement?.lastElementChild?.textContent
    let name:string = email!;
    var indexName = this.myArray.indexOf(name);

    if(event.checked == false){
      this.cnt -= 1;
      this.myArray.splice(indexName, 1);
    }else{
      this.cnt += 1;
      this.myArray.push(name)
    }
    this.cnt >= 5 && this.cnt <= 7 ? element.disabled = false : element.disabled = true;
}

  sendRequest(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be sending "' + this.myArray + '" request feedback form to these emails!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {

      if (result.value) {
        const test = window.localStorage.getItem('EMAIL_TOKEN');
        let name:string = test!;
        const AuthStr = 'Bearer '.concat(name);
        axios.post("https://mlback-end.herokuapp.com/api/emails", this.myArray, { headers: { Authorization: AuthStr }}).then(res =>{
          Swal.fire(
                'Send!',
                'success'
              )
        }).catch(err => {
          console.log(err);
          Swal.fire('Opppss!','Credential does not match in our data', 'warning');
        })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your request feedback form is cancelled.',
          'error'
        )
      }
    })
  }


}
