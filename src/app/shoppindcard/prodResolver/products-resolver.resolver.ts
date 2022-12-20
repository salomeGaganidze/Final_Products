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
export class ProductsResolverResolver implements Resolve<any> {
  constructor(private _serv: MyServiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    const ID_PROD = Number (route.paramMap.get('id'))
    return this._serv.getSingleProduct(ID_PROD)
  }
}
