import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cartbill',
  templateUrl: './cartbill.component.html',
  styleUrls: ['./cartbill.component.scss']
})
export class CartbillComponent implements OnInit {

  numberOfItems = 0;
  amount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.numberOfItems = 0;
      this.amount = 0;
      for (let i = 0; i < items.length; i++) {
        this.numberOfItems += items[i].quantity;
        this.amount += items[i].book.price;
      }
    });
  }

}
