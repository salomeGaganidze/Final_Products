import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
export const myRout = RouterModule.forRoot(ROUTES);
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
