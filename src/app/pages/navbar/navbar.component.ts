import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import axios from 'axios';
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
    const test = window.localStorage.getItem('EMAIL_TOKEN');
    let name:string = test!;
    const AuthStr = 'Bearer '.concat(name);
    axios.post("https://mlback-end.herokuapp.com/api/logout/", { headers: { Authorization: AuthStr }})
    localStorage.removeItem('EMAIL_TOKEN');
    this.router.navigate(['/login-page'])
  }

}
