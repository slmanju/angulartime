import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.scss']
})
export class CartitemsComponent implements OnInit {

  cartItems;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

}
