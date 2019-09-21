import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartmenu',
  templateUrl: './cartmenu.component.html',
  styleUrls: ['./cartmenu.component.scss']
})
export class CartmenuComponent implements OnInit {

  numberOfItems = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let cartItems = this.cartService.getCartItems();
    console.log(cartItems);
    this.numberOfItems = cartItems.length;
  }

}
