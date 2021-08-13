import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit{

  constructor(private router: Router) { }

  username :string ="Amit kumar";
  usergmail:string ="amit@gmail.com";
  usermob1:number = 7325060981;
  usermob2:number = 9661205537;
  usercity:string = "Hazaribagh";
  uservillage:string = "Silwar khurd";
  userpincode:number= 825317;



  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(["/updateuserdetail"]);
  }
  gocart(){
    this.router.navigate(["/cart"]);
  }
  gomyorder(){
    this.router.navigate(["/order"]);
  }
  gomywishlist(){
    this.router.navigate(["/wishlist"]);
  }

}

