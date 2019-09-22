import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewbookComponent } from '../viewbook/viewbook.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books;

  constructor(private bookService: BookService,
              private cartService: CartService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onBuy(book) {
    this.cartService.addToCart(book, 1);
  }

  openDialog(book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = book;

    this.dialog.open(ViewbookComponent, dialogConfig);
  }

}
