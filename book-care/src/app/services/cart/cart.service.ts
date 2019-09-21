import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  constructor() { }

  addToCart(book, quantity) {
    this.cartItems.push({
      book: book,
      quantity: quantity
    });
  }

  getCartItems() {
    return this.cartItems;
  }

}
