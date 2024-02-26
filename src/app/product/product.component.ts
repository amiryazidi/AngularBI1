import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private ps:ProductService, private cs:CalculService ){}
  priceMax!: number;
  alert!:number
  listProduct:Product[]=[]

  ngOnInit(){
    this.listProduct=this.ps.listProduct
    this.alert=this.cs.stat(this.listProduct,'quantity',0)
  }
  increment(id: number) {
    this.listProduct[id].like++;
  }
  buy(id: number) {
    this.listProduct[id].quantity--;
  }
}
