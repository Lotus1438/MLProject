

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}