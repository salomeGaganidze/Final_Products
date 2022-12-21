import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { baseUrl } from 'src/app/coreData/objects';
import { LocalStorageService } from 'src/app/coreData/storage.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(
    private _http: HttpClient,
    private _localtStorage: LocalStorageService
  ) {}

  authUserData(form: { email: string; password: string }): Observable<any> {
    return this._http
      .post(`${baseUrl}/auth/login`, {
        username: form.email,
        password: form.password,
      })
      .pipe(
        // catchError(this.errorHandler),
        tap((result: any) => this._localtStorage.setItem('Token', result))
      );
  }

  autorizedUser() {
    return this._localtStorage.itemExists('Token');
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(throwError(() => new Error(`${error.message} Invalid Login`)))
    return throwError(() => new Error(`${error} Invalid Login`));
  }
}
