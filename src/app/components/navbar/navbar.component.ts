import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  user_status:boolean;
  showsearch:boolean=false;

  constructor(private router: Router , private breakpointObserver: BreakpointObserver) {
    this.user_status=true;
  }

  gomyaccount(){
     this.router.navigate(["/userdetail"]);
  }
  gologin(){
    this.router.navigate(["/login"]);
  }
  logout(){
    window.location.href = "/home";
    console.log("logout called ");
  }
  gocart(){
    this.router.navigate(["/cart"]);
  }

  search(){
    console.log("search called");
  }
  check(){
    console.log("check called");
  }
  showsearchbar(){
    if(this.showsearch){
      this.showsearch=false;
    }else{
      this.showsearch=true;
    }

  }
}
