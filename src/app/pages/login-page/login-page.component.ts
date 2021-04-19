import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router){}


  ngOnInit(): void {

  }
  public EMAIL_TOKEN: any;
  loginForm = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required]),
  })




  hidden = true;

  hide(){
    this.hidden = !this.hidden;
  }


login(){
  axios.post("https://mlback-end.herokuapp.com/api/login", this.loginForm.value).then(res =>{
  console.log(res.data);
  window.localStorage.setItem('EMAIL_TOKEN',res.data.access_token);
  return this.router.navigate(['/email-request-feedback-page']);
  }).catch(err => {
    console.log("Error!");

  })

}

}
