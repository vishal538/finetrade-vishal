import {Component } from '@angular/core';
import { MyCard } from '../Models/my-card';
import { MyCardService } from '../Services/my-card.service';

@Component({
  selector: 'ngx-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
})
export class CartComponent {
// class variables
//constructor
//functions

 
  public products: Array<MyCard>;
  public showNavigationIndicators: Boolean = false;

  constructor(private _proservice: MyCardService) {

  this._proservice.fetchAllProducts().subscribe((allproducts: Array<MyCard>) => {
      this.products = allproducts;
      //this.increment(34); // call karte time jo actual value pass karte hai usko ARGUMENT bolte hai
    });    
    
}

increment(product: MyCard) {
  ++product.count;
}

decrement(product: MyCard) {
  --product.count;
}
}