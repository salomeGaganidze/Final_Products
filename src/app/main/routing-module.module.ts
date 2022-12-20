import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductsComponent } from '../shoppindcard/products/products.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ProducByIdComponent } from '../shoppindcard/produc-by-id/produc-by-id.component';
import { AuthGGuard } from '../auth/login/Guard/auth-g.guard';
import { ProductsResolverResolver } from '../shoppindcard/prodResolver/products-resolver.resolver';
import { DataResolver } from '../shoppindcard/prodDataresolver/data.resolver';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGGuard],
    children: [
      {
        path: '',
        component: ReactiveFormComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
        resolve : {DataToShow : DataResolver}
      },
      {
        path: 'products/:id',
        component: ProducByIdComponent,
        resolve: {ProdToShow : ProductsResolverResolver },
      },

      {
        path: 'reactivereviewform',
        component: ReactiveFormComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RoutingModuleModule {}
