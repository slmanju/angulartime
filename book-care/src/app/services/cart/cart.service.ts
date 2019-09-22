import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  private messageSource = new BehaviorSubject(this.cartItems);
  //cartItems = this.messageSource.asObservable();

  constructor() { }

  addToCart(book, quantity) {
    this.cartItems.push({
      book: book,
      quantity: quantity
    });

    this.messageSource.next(this.cartItems);
  }

  getCartItems() {
    return this.messageSource.asObservable(); // this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.messageSource.next(this.cartItems);
  }

}
