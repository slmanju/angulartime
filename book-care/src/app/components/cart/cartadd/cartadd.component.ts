import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartadd',
  templateUrl: './cartadd.component.html',
  styleUrls: ['./cartadd.component.scss']
})
export class CartaddComponent implements OnInit {

  cartAddForm : FormGroup;

  books;

  constructor(private formBuilder: FormBuilder, 
              private bookService: BookService,
              private cartService: CartService) {
    this.cartAddForm = formBuilder.group({
      book: {},
      quantity: 1
    });
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onBookAdd() {
    let cartItem = this.cartAddForm.value;
    this.cartService.addToCart(cartItem.book, parseInt(cartItem.quantity));
  }

}
