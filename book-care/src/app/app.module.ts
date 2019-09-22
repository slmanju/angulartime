import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddbookComponent } from './components/book/addbook/addbook.component';
import { ViewbookComponent } from './components/book/viewbook/viewbook.component';
import { BooksComponent } from './components/book/books/books.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartmenuComponent } from './components/cart/cartmenu/cartmenu.component';
import { CartitemsComponent } from './components/cart/cartitems/cartitems.component';
import { CartaddComponent } from './components/cart/cartadd/cartadd.component';
import { CartareaComponent } from './components/cart/cartarea/cartarea.component';
import { CartbillComponent } from './components/cart/cartbill/cartbill.component';
import { ViewBooksComponent } from './components/book/view-books/view-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddbookComponent,
    ViewbookComponent,
    BooksComponent,
    MenuComponent,
    CartmenuComponent,
    CartitemsComponent,
    CartaddComponent,
    CartareaComponent,
    CartbillComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
