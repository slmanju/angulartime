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

  next() {
    this.messageSource.next(this.cartItems);
  }

  addToCart(book, quantity) {
    this.cartItems.push({
      cartId: new Date().getTime(),
      book: book,
      quantity: quantity
    });

    this.next();
  }

  removeBook(cartItem) {
    this.cartItems = this.cartItems.filter(item => (item.cartId !== cartItem.cartId));

    this.next();
  }

  getCartItems() {
    return this.messageSource.asObservable(); // this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.next();
  }

}
