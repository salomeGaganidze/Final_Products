import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/prodService/my-service.service';
import { IProductCard } from './product.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  fromchld: number = 0;
  products: IProductCard[] | undefined;
  MyArray = [0];
  searchword: string = '';
  coutnArray: number[] = [];
  addedItems: IProductCard[] = [];

  constructor(
    private _service: MyServiceService,
    private _router: Router,
    private _actievData: ActivatedRoute
  ) {}
  setclass(bl: number | undefined | null) {
    if (bl !== undefined && bl !== null && bl > 0) {
      return 'Trueclass';
    }
    return 'Falseclass';
  }

  setmyClass(num: number) {
    if (num % 2 == 0) {
      return 'even';
    }
    return 'odd';
  }

  getchildsdt(dt: any) {
    console.log('dd');
    this.fromchld = dt;
  }

  ngOnInit(): void {
    this.dataUpdate();
  }

  dataUpdate() {
    this._actievData.data
      .pipe(map((res) => res['DataToShow']))
      .subscribe((result) => (this.products = result));
  }

  directToProduct(prodId: number) {
    this._router.navigate(['main/products', prodId]);
  }

  getSearchResults() {
    console.log(this.searchword);
    this._service
      .searchProduct(this.searchword)
      .subscribe((result) => (this.products = result));
  }
  deleteItem(id: number) {
    this._service.deleteItem(id).subscribe(
      (res: any) =>
        (this.products = this.products?.filter((result) => {
          return result.id !== res.id;
        }))
    );
  }

  getProductToAdd(id: number) {
    if (this.addedItems.filter((x) => x.id == id).length == 0) {
      this._service
        .getSingleProduct(id)
        .subscribe((result: any) => this.addedItems.push(result));
      console.log(this.addedItems);
    }
  }

  delItem(id: number) {
    this.addedItems = this.addedItems.filter((result) => {
      return result.id != id;
    });
  }
}
