import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
// import { Router } from '@angular/router';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})



export class ContentPageComponent implements OnInit {

  feedbackQuestionLists = new FormGroup({
    question1: new FormControl('', [Validators.required]),
    question2: new FormControl('', [Validators.required]),
    question3: new FormControl('', [Validators.required])
  });

  // constructor(private router: Router) { }

  ngOnInit(): void {
    // this.nextBtn();
    // this.submitBtn();
  }

  isHide = false;
  nextBtn() {
    console.log("User's Input: ", this.feedbackQuestionLists);
    if (this.isHide) {
      this.isHide = false;
    } else {
      this.isHide = true;
    }
  }

  submitBtn() {
    console.log("User's Radion Button Choice: ", );
  }

}