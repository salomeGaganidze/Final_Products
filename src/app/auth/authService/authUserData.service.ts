import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/app/coreData/objects';
import { LocalStorageService } from 'src/app/coreData/storage.service';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private _http: HttpClient , private _localtStorage : LocalStorageService) {}

  authUserData( form : {email: string, password: string}): Observable<any> {
    return this._http.post(`${baseUrl}/auth/login`, {
      username: form.email,
      password: form.password,
    }).pipe(
      tap((result :any) => this._localtStorage.setItem('Token',result) )
    )
  }

  autorizedUser()
  {
    return this._localtStorage.itemExists('Token')  }
}
