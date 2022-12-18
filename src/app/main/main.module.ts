import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../shoppindcard/products/products.component';
import { CUstomPipePipe } from '../shoppindcard/custom-pipe.pipe';
import { MyDirectiveDirective } from '../my-directive.directive';
import { StartsComponent } from '../shoppindcard/starts/starts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModuleModule } from './routing-module.module';
import { LoginComponent } from '../auth/login/login.component';
import { ReactiveResultComponent } from '../reactive-result/reactive-result.component';
import { ShowStartsComponent } from '../shoppindcard/show-starts/show-starts.component';
import { HttpClientModule } from '@angular/common/http';
import { ProducByIdComponent } from '../shoppindcard/produc-by-id/produc-by-id.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CUstomPipePipe,
    MyDirectiveDirective,
    StartsComponent,
    ReactiveResultComponent,
    ShowStartsComponent,
    ProducByIdComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutingModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    ProductsComponent,
    CUstomPipePipe,
    MyDirectiveDirective,
    StartsComponent,
    LoginComponent,
    ReactiveResultComponent,
    ShowStartsComponent,
    HttpClientModule,
    ProducByIdComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainModule {}
