import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import axios from 'axios';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router){} 

  form = new FormGroup ({
    email_address: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required),
  })

  submit(){
    this.router.navigate(['/request-feedback-page']);
  }

}
