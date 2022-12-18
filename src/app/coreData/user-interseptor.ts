import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _storage: LocalStorageService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._storage.itemExists('Token')) {
      const Token = this._storage.getItem('Token');
      const ReqClon = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Token}`,
        },
      });
      return next.handle(ReqClon);
    }
    return next.handle(request);
  }
}
