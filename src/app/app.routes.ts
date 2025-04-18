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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
