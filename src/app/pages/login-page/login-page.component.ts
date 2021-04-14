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
export class LoginPageComponent implements OnInit {

  constructor(private router: Router){}



  ngOnInit(): void {

  }

  loginForm = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required),
  })

// onLogin(){
//   console.log("Login Successfully!");
// }

login(){
  this.router.navigate(['/email-request-feedback-page'])
}

}
