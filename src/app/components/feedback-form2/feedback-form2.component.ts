import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-feedback-form2',
  templateUrl: './feedback-form2.component.html',
  styleUrls: ['./feedback-form2.component.css']
})
export class FeedbackForm2Component implements OnInit {

  constructor(private route: Router) { }

  feedbackRate = new FormGroup ({
    categoryOne: new FormControl(null, [Validators.required]),
    categoryTwo: new FormControl(null, [Validators.required]),
    categoryThree: new FormControl(null, [Validators.required]),
    categoryFour: new FormControl(null, [Validators.required]),
    categoryFive: new FormControl(null, [Validators.required]),
   })

  ngOnInit(): void {
  }

  submitBtn() {
    console.log('Value' ,this.feedbackRate.value);

    axios.post("https://mlproject-backend.herokuapp.com/api/forms", this.feedbackRate.value).then(res =>{
      window.localStorage.setItem('FORM_TOKEN',res.data.token);
      sessionStorage.setItem('Username',this.feedbackRate.value);
      return this.route.navigate(['/request-feedback-page']);
      }).catch(err => {
        console.log(err);

        Swal.fire('Opppss!','Credential does not match in our data', 'warning');
      })

  }
  nextBtn() {

  }

}
