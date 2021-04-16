import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



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
    password: new FormControl ('', [Validators.required]),
  })




  hidden = true;

  hide(){
    this.hidden = !this.hidden;
  }

onLogin(){
  console.log("Login Successfully!");

}

login(){
  this.router.navigate(['/email-request-feedback-page'])
}

}
