import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuserdetail',
  templateUrl: './updateuserdetail.component.html',
  styleUrls: ['./updateuserdetail.component.css']
})
export class UpdateuserdetailComponent implements OnInit {

  constructor(private location: Location, private router: Router ) { }

  username :string ="Amit kumar";
  usergmail:string ="amit@gmail.com";
  usermob1:number = 7325060981;
  usermob2:number = 9661205537;
  usercity:string = "Hazaribagh";
  uservillage:string = "Silwar khurd";
  userpincode:number= 825317;

  ngOnInit(): void {
  }

  name = new FormControl(this.username, [Validators.required]);
  getErrorMessagename() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
  }

  mob1 = new FormControl(this.usermob1, [Validators.required ,Validators.min(6000000000), Validators.max(9999999999)]);
  getErrorMessagemob1() {
    if (this.mob1.hasError('required')) {
      return 'You must enter mobile no';
    }
    else{
      return 'You must enter valid mobile no.';
    }
  }

  mob2 = new FormControl(this.usermob2, [Validators.min(6000000000), Validators.max(9999999999)]);
  getErrorMessagemob2() {
    if (this.mob2.hasError('pattern')) {
      return 'You must enter valid mobile no.';
    }
  }

  city = new FormControl(this.usercity, [Validators.required ]);
  getErrorMessagecity() {
    if (this.city.hasError('required')) {
      return 'You must enter your district name';
    }
  }

  village = new FormControl(this.uservillage, [Validators.required ]);
  getErrorMessagevillage() {
    if (this.village.hasError('required')) {
      return 'You must enter your village/local area name';
    }
  }

  pincode = new FormControl(this.userpincode, [Validators.required ,Validators.minLength(6), Validators.max(999999)]);
  getErrorMessagepincode() {
    if (this.pincode.hasError('required')) {
      return 'You must enter your area code';
    }
    else{
      return 'You must enter valid pin code';
    }
  }

  updatedata(){
    this.router.navigate(['/updateuserdetail']);
    console.log("username "+this.username);
  }

  goback(){
    this.location.back();
  }
}
