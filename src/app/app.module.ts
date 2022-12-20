import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { RoutingModuleModule } from './main/routing-module.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReactiveFormComponent,
    FooterComponent,
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MainModule,
    RoutingModuleModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
