import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ProductsComponent} from './pages/products/products.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {CartComponent} from './pages/cart/cart.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
    {
    path: 'about',
    component: AboutComponent,
  },
    {
    path: 'products',
    component: ProductsComponent,
  },
    {
    path: 'contact-us',
    component: ContactsComponent,
  },
    {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
