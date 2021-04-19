import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  logout(){
    this.router.navigate(['/login-page'])
  }

}
