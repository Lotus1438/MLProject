import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent implements OnInit {

  // Feedback Questionnaire Textarea
  public FORM_TOKEN: any;
  feedbackQuestionLists = new FormGroup({
    question1: new FormControl('', [Validators.required]),
    question2: new FormControl('', [Validators.required]),
    question3: new FormControl('', [Validators.required])
  });

  // For Rate Scale Radio Button
  // public isRequired = true;
  public feedbackRateScale = new FormGroup({
    categoryOne: new FormControl(null, [Validators.required]),
    categoryTwo: new FormControl(null, [Validators.required]),
    categoryThree: new FormControl(null, [Validators.required]),
    categoryFour: new FormControl(null, [Validators.required]),
    categoryFive: new FormControl(null, [Validators.required]),
    categorySix: new FormControl(null, [Validators.required]),
    categorySeven: new FormControl(null, [Validators.required]),
    categoryEight: new FormControl(null, [Validators.required]),
    categoryNine: new FormControl(null, [Validators.required]),
    categoryTen: new FormControl(null, [Validators.required])
  });

  ;



  // Maximun words (NOT WORKING HUHU)
  // public value = 'Dear friend,';
  // public maxlength = 100;
  // public charachtersCount!: number;
  // public counter: string = '';


  // public ngOnInit() {
  //   this.charachtersCount = this.value ? this.value.length : 0;
  //   this.counter = '${this.charachtersCount}/${this.maxlength}';
  // }

  // public onValueChange(ev: any): void {
  //   this.charachtersCount = ev.length;
  //   this.counter = '${this.charachtersCount}/${this.maxlength}';
  // }

  constructor(private route: Router) { }

  answers : any;
  ngOnInit(): void {

  }

  // Change text color of span
  textColor = false;
  // status = 'Enable'

  // Hide and Show Function
  isHide = false;

  nextBtn() {
    console.log("User's Input: ", this.feedbackQuestionLists);
    if (this.isHide) {
      this.isHide = false;
      this.textColor = false;

    } else {
      this.isHide = true;
      this.textColor = true;
    }
  }



  // Feedback Done
  submitBtn() {
    // console.log("User's Radion Button Choice: ", this.feedbackRateScale);
    // window.location.reload();
    // const test = window.localStorage.getItem('EMAIL_TOKEN');
    // let name:string = test!;
    // const AuthStr = 'Bearer '.concat(name);
    // axios.post("https://mlback-end.herokuapp.com/api/forms", { headers: { Authorization: AuthStr } })
    //   .then(response => {
    //     this.answers = response.data;
    //   })
    //   .catch((error) => {
    //     console.log('error ' + error);
    //   });
  axios.post("https://mlback-end.herokuapp.com/api/forms", this.feedbackQuestionLists.value).then(res =>{
  window.localStorage.setItem('FORM_TOKEN',res.data.token);
  sessionStorage.setItem('Username',this.feedbackQuestionLists.value);
  return this.route.navigate(['/request-feedback-page']);
  }).catch(err => {
    console.log(err);

    Swal.fire('Opppss!','Credential does not match in our data', 'warning');

  })
  }

}
