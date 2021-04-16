import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.css']
})
export class ContentsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
