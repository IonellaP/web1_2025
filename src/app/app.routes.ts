import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ProductsListComponent} from './pages/products/products-list/products-list.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {CartComponent} from './pages/cart/cart.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NgModule} from '@angular/core';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {RegisterComponent} from './pages/register/register.component';
import {ProductComponent} from './pages/products/product/product.component';

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
    component: ProductsListComponent,
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
    path: 'login',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  // {
  //   path: 'product',
  //   component: ProductComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
