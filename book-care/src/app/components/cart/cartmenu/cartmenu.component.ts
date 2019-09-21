import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartmenu',
  templateUrl: './cartmenu.component.html',
  styleUrls: ['./cartmenu.component.scss']
})
export class CartmenuComponent implements OnInit {

  numberOfItems = 0;
  cartItems = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // let cartItems = this.cartService.getCartItems();
    // console.log(cartItems);
    // this.numberOfItems = cartItems.length;
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.numberOfItems = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        this.numberOfItems += this.cartItems[i].quantity;
      }
    });
  }

}
