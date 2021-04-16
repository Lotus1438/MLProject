import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgxMatErrorsModule } from 'ngx-mat-errors';

@Component({
  selector: 'app-performance-tab',
  templateUrl: './performance-tab.component.html',
  styleUrls: ['./performance-tab.component.css']
})
export class PerformanceTabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
