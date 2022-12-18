import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/prodService/my-service.service';
import { IProductCard } from '../products/product.interface';

@Component({
  selector: 'app-produc-by-id',
  templateUrl: './produc-by-id.component.html',
  styleUrls: ['./produc-by-id.component.css'],
})
export class ProducByIdComponent implements OnInit {
  products: IProductCard | undefined = {
    id: 1,
    title: '',
    price: 1,
    discountPercentage: 0,
    description: '',
    category: '',
    images: [''],
    rating: 0,
    stock: 0,
    thumbnail: '',
    brand: '',
    oldPrice: 0,
  };
  constructor(
    private _singleProd: MyServiceService,
    private _activeId: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const prodId = Number(this._activeId.snapshot.paramMap.get('id'));
    this._singleProd.getSingleProduct(prodId).subscribe((result) => {
      this.products = result;
    });

    console.log(this.products);
  }

  nabigateToProds() {
    this._router.navigate(['main/products']);
  }

  ngOnDestroy() {}
}
