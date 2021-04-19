import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-feedback-page',
  templateUrl: './request-feedback-page.component.html',
  styleUrls: ['./request-feedback-page.component.css']
})
export class RequestFeedbackPageComponent implements OnInit {

  constructor(private service : EmailService) { }

  selectForm = new FormGroup ({
    select: new FormControl (' ', [Validators.required]),
  })

  emails : any;
  myArray : Array<string> = [];
  cnt : number = 0;

  ngOnInit(): void {
    this.getEmails();
    (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = true;
  }

  getEmails(){
    this.service.getAllEmails().subscribe((data:any) => {
      this.emails = data.data;
      console.log(data);

    })
  }

  sendRequest(){
    console.log("Request Send Successfully!");
    // this.service.test().subscribe((data) => {
    //   console.log(data);

    // })

    // swal field
    //route = https//sendmail.com/api/send-email, this.myArray
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be sending "' + this.myArray + '" request feedback form to these emails!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {

      if (result.value) {
        this.service.sendEmail(this.myArray).subscribe((data:any)=>{
          console.log(data);

          Swal.fire(
            'Send!',
            'success'
          )
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

  submit(){
    console.log('Request');
  }

  Check(event:MatCheckboxChange): void {
    var id = event.source.id.split('-')[2];
    var index = Number(id);
    var data = document.getElementsByClassName('example-margin');
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

    // console.log(this.myArray);

    if( this.cnt >=5 && this.cnt<=7){
      (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = false;
      (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = false;

    }else{
      (<HTMLInputElement> document.getElementById("btnsend-request")).disabled = true;
      (<HTMLInputElement> document.getElementById("btnsend-request-2")).disabled = true;
    }

}
}
