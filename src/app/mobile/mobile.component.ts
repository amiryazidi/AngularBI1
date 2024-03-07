import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listMobile:any[]=[]
  ngOnInit(){

    this.listMobile=[
      {id:1, name:"Samsung", price:5000, quantity:10, like:0,image:"../../assets/images/tv.jpg"},
      {id:2, name:"LG", price:4000, quantity:10, like:0,image:"../../assets/images/tv.jpg"},
      {id:3, name:"Sony", price:6000, quantity:10, like:0,image:"../../assets/images/tv.jpg"},
    ]
  }
}
