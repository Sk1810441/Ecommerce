import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { AuthInterceptor } from'../interceptor/auth.interceptor';

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  errorData: {};

  url ="http://127.0.0.1:8000/api/";

  isLoading = new BehaviorSubject(false);
  usergmail:string;
  username:string;

  startLoading() {
    this.isLoading.next(true);
  }

  stopLoading() {
    this.isLoading.next(false);
  }

  login(usergmail:string, password:string):Observable<any>{
    return this.http.post<any>(this.url+"login.php",
    {
      "gmail":usergmail,
      "password":password,
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  contact(username:string, usergmail:string, usermessage:string):Observable<any>{
    console.log("Called here");
    return this.http.post<any>(this.url+"message.php",
    {
      "username":username,
      "gmail":usergmail,
      "message":usermessage
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  register(name:string, usergmail:string, usercity:string, userpassword:string):Observable<any>{
    return this.http.post<any>(this.url+"register.php",
    {
      "username":name,
      "gmail":usergmail,
      "city":usercity,
      "password":userpassword
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  otpVerify(usergmail:string, otp:number):Observable<any>{
    return this.http.post<any>(this.url+"otpverfy.php",
    {
      "gmail":usergmail,
      "otp":otp,
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  sendotp(usergmail:string):Observable<any>{
    return this.http.post<any>(this.url+"forgotpassword.php",
    {
      "gmail":usergmail,
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  verify(usergmail:string,  userotp:number):Observable<any>{
    return this.http.post<any>(this.url+"forgotpasswordotp.php",
    {
      "gmail":usergmail,
      "otp":userotp
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  changepassword(usergmail:string, userpassword:string):Observable<any>{
    return this.http.post<any>(this.url+"changepassword.php",
    {
      "gmail":usergmail,
      "password":userpassword
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  homescreen(seller_code:number):Observable<any>{
    return this.http.post<any>(this.url+"customer/home",
    {
      "seller_code":seller_code,
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  productlist(seller_code:number,categoryid:number):Observable<any>{
    return this.http.post<any>(this.url+"customer/productlist",
    {
      "seller_code":seller_code,
      "categoryid":categoryid
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  product(productid:number):Observable<any>{
    return this.http.post<any>(this.url+"customer/product",
    {
      "productid":productid
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  similarproduct(seller_code:number,categoryid:number,product_code:string):Observable<any>{
    return this.http.post<any>(this.url+"customer/similarproduct",
    {
      "seller_code":seller_code,
      "categoryid":categoryid,
      "product_code":product_code
    },
    this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  getStatus():Observable<any>{
    if(sessionStorage.getItem("username") && sessionStorage.getItem("usergmail")){
      return  observableOf(true);
    }else{
    // return this.http.get<any>(this.url+"status.php").pipe(
      // catchError(this.handleError)
       return  observableOf(false);
    // );
     }
 }

  // getStatus():Observable<any>{

  //       return this.http.post<any>(this.url+"allinone.php",
  //       {
  //         "action":"2"
  //       },
  //       this.httpOptions
  //       ).pipe(
  //         catchError(this.handleError)
  //        );

  // }


  // logout():Observable<any>{
  //   return this.http.post<any>(this.url+"allinone.php",
  //       {
  //         "action":"3"
  //       },
  //       this.httpOptions
  //       ).pipe(
  //         catchError(this.handleError)
  //        );

  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
