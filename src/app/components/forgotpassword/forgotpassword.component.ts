import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Router } from '@angular/router'


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  usergmail :string;
  userotp :number;
  userpassword :string;
  sucessmessage : string ="password change sucessfully please login";
  changemessage : string ="password does not change please try again";
  errormessage : string ="OPT does not match please try again";
  opterrormessage : string ="OTP not send please try again";
  status:boolean = false;
  hide :boolean =false;
  case : string = "screen1";

  constructor( private dialog: MatDialog, private location: Location, private router: Router) { }

  ngOnInit(): void {

        if(this.status)
        {
          this.location.back();
        }

  }

  openDialog(message:string) {
    this.dialog.open(DialogboxComponent, {
      data: {message: message}
    });
  }

  gmail = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessagegmail() {
    if (this.gmail.hasError('required')) {
      return 'You must enter a gmail';
    }
    return this.gmail.hasError('email') ? 'Not a valid email' : '';
  }

  otp = new FormControl('', [Validators.required]);
  getErrorMessageotp() {
    if (this.otp.hasError('required')) {
      return 'You must enter a opt send in your gmail';
    }
  }

  password = new FormControl('', [Validators.required]);
  getErrorMessagepassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }

  sendotp(){
    if(true){     //send otp
      this.case="screen2";
    }
    else{
      this.openDialog(this.opterrormessage);
      return;
    }
  }

  verify(){
    if(true){
      this.case="screen3";
    }
    else{
      this.openDialog(this.errormessage);
      this.case="screen1";
    }
  }

  changepassword(){
    if(true){
      this.openDialog(this.sucessmessage);
      this.router.navigate(['/login']);
    }
    else{
      this.openDialog(this.changemessage);
      this.case="screen1";
    }
  }

  goback(){
    this.case="screen1";
  }

}
