import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  finalize } from 'rxjs/operators';
import { BackendService } from '../service/backend.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private BackendService: BackendService) {}
  activeRequests = false;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!(this.activeRequests)) {
      this.BackendService.startLoading();
  }

  this.activeRequests = true;

  return next.handle(request).pipe(
      finalize(() => {
          this.activeRequests = false;
          if ((!this.activeRequests)) {
              this.BackendService.stopLoading();
          }
      })
  );

  }
}
