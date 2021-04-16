import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from 'src/app/email.service';
import Swal from 'sweetalert2';
import { EmailRequest } from '../../models';


@Component({
  selector: 'app-email-requested-page',
  templateUrl: './email-requested-page.component.html',
  styleUrls: ['./email-requested-page.component.css']
})
export class EmailRequestedPageComponent implements OnInit {

  // @Input() email: EmailRequest;

  constructor( private emailService: EmailService) { }

  ngOnInit(): void {
  }

  hidden = true;
  hide = true;

  show(){
    this.hidden = !this.hidden;
  }

  create(){
    this.hide = !this.hide;
  }

  cancel(){
    this.hidden = !this.hidden;
  }

  send(){
    console.log("Message send successfully!");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Message send successfully!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
