import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  priceMax!: number;
  listProduct: Product[] = [
    { id: 1, title: 'Product 1', price: 100, quantity: 10, like: 0 },
    { id: 2, title: 'Product 2', price: 200, quantity: 20, like: 0 },
    { id: 3, title: 'Product 3', price: 300, quantity: 30, like: 0 },
  ];
  increment(id: number) {
    this.listProduct[id].like++;
  }
  buy(id: number) {
    this.listProduct[id].quantity--;
  }
}
