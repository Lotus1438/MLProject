import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private spinner: MatProgressSpinnerModule){}


  ngOnInit(): void {

  }
  public EMAIL_TOKEN: any;
  loginForm = new FormGroup ({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required]),
  })


  load = true;
  hidden = true;

  hide(){
    this.hidden = !this.hidden;
  }


login(){
  console.log(this.loginForm.value)
  this.load = false;
  axios.post("https://mlback-end.herokuapp.com/api/login", this.loginForm.value).then(res =>{
  console.log(res.data.token);
  window.localStorage.setItem('EMAIL_TOKEN',res.data.token);
  // this.load = false;
  return this.router.navigate(['/request-feedback-page']);
  }).catch(err => {
    Swal.fire('Opppss!','Credential does not match in our data', 'warning');
  this.load = true;
  })

}

}
