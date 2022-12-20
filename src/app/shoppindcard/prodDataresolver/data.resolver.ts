import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MyServiceService } from 'src/app/prodService/my-service.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<boolean> {
  constructor(private _serv: MyServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._serv.getdata();
  }
}
