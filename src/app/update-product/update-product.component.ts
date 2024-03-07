import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private route:Router,private consP:ConsumerProductService,private act:ActivatedRoute){}
  addForm!:FormGroup;
  id!:number
  p!:Product
  ngOnInit() {
    this.addForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required, Validators.minLength(4)]),
      price:new FormControl('', Validators.required),
      quantity:new FormControl('', Validators.required),
      like:new FormControl('', Validators.required)
    });
      // 1 - récuper l'id depuis l'url
    this.id=this.act.snapshot.params['id'];
    //2-recuperer le produit dans p
    this.consP.getProductsById(this.id).subscribe(
      (data)=>{
        this.p=data
        //3- initialiser formulaire avec P
        this.addForm.patchValue(this.p)
      })
  }
//update
save(){
  this.consP.updateProduct(this.id,this.addForm.value).subscribe(
    ()=>this.route.navigateByUrl('/product')
  )
}
}
