import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide :boolean = true;
  usergmail:string;
  userpassword:string;
  remember:boolean = false;
  status:boolean = false;
  productid;

 constructor(private dialog: MatDialog,  private location: Location, private router: Router ,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

        if(this.status)
        {
          this.location.back();
        }

    this.productid =  parseInt(this.activatedRoute.snapshot.paramMap.get('productid'));

    console.log("Amit"+this.productid);

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

  password = new FormControl('', [Validators.required]);
  getErrorMessagepassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }


  login(){



       if(this.status){

        this.openDialog("Amit");
        if(this.remember){
           console.log(this.remember);
        }
        this.router.navigate(['/home']);
       }
       else{
        this.openDialog("Amit");
       }



  }

}
