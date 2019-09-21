import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BooksComponent } from '../components/book/books/books.component';
import { ViewbookComponent } from '../components/book/viewbook/viewbook.component';
import { AddbookComponent } from '../components/book/addbook/addbook.component';
import { CartareaComponent } from '../components/cart/cartarea/cartarea.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-book',
    component: AddbookComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'view-book',
    component: ViewbookComponent
  },
  {
    path: 'cart',
    component: CartareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
