import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {EmailService} from 'src/app/services/email.service';
import {EmailRequest} from '../../models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  emails:EmailRequest[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private emailService: EmailService,
    private router: Router) {}

  ngOnInit(): void {

  }

  hidden = true;

  reply(){
    this.hidden = !this.hidden;
  }

  cancel(){
    this.hidden = !this.hidden;
  }

  logout(){
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
