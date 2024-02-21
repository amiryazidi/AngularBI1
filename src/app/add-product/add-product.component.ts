import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addForm!:FormGroup;

  ngOnInit() {
    this.addForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required, Validators.minLength(4)]),
      price:new FormControl('', Validators.required),
      quantity:new FormControl('', Validators.required),
      like:new FormControl('', Validators.required)

    });
  }

save(){
  console.log(this.addForm.value);
}
}
