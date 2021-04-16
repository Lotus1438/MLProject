// FIRST
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback-tab',
  templateUrl: './feedback-tab.component.html',
  styleUrls: ['./feedback-tab.component.css']
})
export class FeedbackTabComponent implements OnInit {

  feedbackQuestionLists = new FormGroup({
    question1: new FormControl('',[Validators.required]),
    question2: new FormControl('',[Validators.required]),
    question3: new FormControl('',[Validators.required])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.onSubmit();
    this.cancelBtn();
    this.nextBtn();
  }

  nextBtn() {
    console.log("NAA MI ARI: ", this.feedbackQuestionLists);
    // this.router.navigate(['performance-tab']);
  }

  cancelBtn() {
    this.router.navigate(['']);
  }

}














// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-feedback-tab',
//   templateUrl: './feedback-tab.component.html',
//   styleUrls: ['./feedback-tab.component.css']
// })
// export class FeedbackTabComponent  {
//   feedbackQuestionLists: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.feedbackQuestionLists = this.formBuilder.group({
//       question1: ['', Validators.required],
//       question2: ['', Validators.required],
//       question3: ['', Validators.required],
//     });
//   }

//   submit() {
//     if (this.feedbackQuestionLists.valid) {
//       console.log(this.feedbackQuestionLists);
//     }
//   }
// }