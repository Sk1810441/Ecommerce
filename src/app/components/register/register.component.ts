import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  send = true;
  sucessmessage : string ="Register sucessfully please login";
  errormessage : string ="OPT does not match please try again";
  opterrormessage : string ="OTP not send please try again";
  username :string;
  usermob1:number;
  usermob2:number;
  usercity :string;
  uservillage:string;
  userpincode:string;
  usergmail :string;
  userpassword : string;
  userotp : number;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

  }

  openDialog(message:string) {
    this.dialog.open(DialogboxComponent, {
      data: {message: message}
    });
  }

  name = new FormControl('', [Validators.required]);
  getErrorMessagename() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
  }

  gmail = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessagegmail() {
    if (this.gmail.hasError('required')) {
      return 'You must enter a gmail';
    }
    return this.gmail.hasError('email') ? 'Not a valid email' : '';
  }

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  getErrorMessagepassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }

  otp = new FormControl('', [Validators.required]);
  getErrorMessageotp() {
    if (this.otp.hasError('required')) {
      return 'You must enter otp';
    }
  }

  mob1 = new FormControl('', [Validators.required ,Validators.min(6000000000), Validators.max(9999999999)]);
  getErrorMessagemob1() {
    if (this.mob1.hasError('required')) {
      return 'You must enter mobile no';
    }
    else{
      return 'You must enter valid mobile no.';
    }
  }

  mob2 = new FormControl('', [Validators.min(6000000000), Validators.max(9999999999)]);
  getErrorMessagemob2() {
    if (this.mob2.hasError('pattern')) {
      return 'You must enter valid mobile no.';
    }
  }

  city = new FormControl('', [Validators.required ]);
  getErrorMessagecity() {
    if (this.city.hasError('required')) {
      return 'You must enter your district name';
    }
  }

  village = new FormControl('', [Validators.required ]);
  getErrorMessagevillage() {
    if (this.village.hasError('required')) {
      return 'You must enter your area name';
    }
  }

  pincode = new FormControl('', [Validators.required ,Validators.minLength(6), Validators.max(999999)]);
  getErrorMessagepincode() {
    if (this.pincode.hasError('required')) {
      return 'You must enter your area code';
    }
    else{
      return 'You must enter valid pin code';
    }
  }

  register()
  {

      if(true){     //send otp
        this.send=false;
      }
      else{
        this.openDialog(this.opterrormessage);
        return;
      }
  }

  otpVerify(){
    if(false){
      this.openDialog(this.sucessmessage);
      this.router.navigate(['/login']);
    }
    else{
      this.openDialog(this.errormessage);
      this.send=true;
    }
  }


}
