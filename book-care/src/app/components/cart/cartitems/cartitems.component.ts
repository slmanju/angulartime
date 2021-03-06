import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.scss']
})
export class CartitemsComponent implements OnInit {

  cartItems;

  selectedIndex = -1;

  selectedBook = {};

  constructor(private cartService: CartService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
    // this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  purchase() {
    this.snackBar.open('Thank you book reader. Happy reading.', 'Ok', {
      duration: 3000,
    });

    this.clearCart();
  }

  onRowSelect(book, index) {
    this.selectedBook = book;
    this.selectedIndex = index;
  }

  onRemove() {
    this.cartService.removeBook(this.selectedBook);

    this.selectedBook = {};
    this.selectedIndex = -1;
  }

}

