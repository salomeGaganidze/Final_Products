import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../coreData/objects';
import {
  IBaseProducts,
  IProductCard,
} from '../shoppindcard/products/product.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private _http: HttpClient) {}

  getdata(): Observable<IProductCard[]> {
    return this._http.get<IBaseProducts>(`${baseUrl}/products`).pipe(
      tap((result) => console.log('Tap operator works first ', result)),
      map((data) => data.products)
    );
  }

  getSingleProduct(id: number): Observable<IProductCard | undefined> {
    return this._http.get<IProductCard>(`${baseUrl}/products/${id}`);
  }

  searchProduct(searchWord: string): Observable<IProductCard[]> {
    return this._http
      .get<IBaseProducts>(`${baseUrl}/products/search`, {
        params: { q: searchWord },
      })
      .pipe(map((data) => data.products));
  }

  deleteItem(id: number): Observable<IProductCard[] | undefined> {
    return this._http
      .delete<any>(`${baseUrl}/products/${id}`)
      .pipe(map((result) => result));
  }



}
