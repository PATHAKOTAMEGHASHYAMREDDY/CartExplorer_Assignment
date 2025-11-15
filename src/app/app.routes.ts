import { Routes } from '@angular/router';
import { CartListComponent } from './CartList/CartList.component';
import { CartDetailsComponent } from './CartDetails/CartDetails.component';

export const routes: Routes = [
  { path: '', redirectTo: '/carts', pathMatch: 'full' },
  { path: 'carts', component: CartListComponent },
  { path: 'carts/:id', component: CartDetailsComponent }
];
