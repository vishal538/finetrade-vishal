import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// import { AuthService } from '';
import { Observable } from 'rxjs/Observable';
import { TenderManagementService } from './create-tender.Service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public token: TenderManagementService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
    Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}