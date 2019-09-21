import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books;

  constructor(private bookService: BookService,
              private cartService: CartService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onBuy(book) {
    this.cartService.addToCart(book, 1);
  }

}
