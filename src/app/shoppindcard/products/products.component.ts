import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/prodService/my-service.service';
import { IProductCard } from './product.interface';

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
  coutnArray: number[] = [1, 2];

  constructor(private _service: MyServiceService, private _router: Router) {}
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
    this.MyArray.shift();
    for (let i = 0; i < 8; i++) {
      this.MyArray.push(Math.floor(Math.random() * 10));
    }

    this._service.getdata().subscribe((result) => (this.products = result));
    //console.log(this.products) aq e=ro dzveli price gammoitano  result.price = result.price * .. ar shveb errordeba da gaarkvie
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
}
