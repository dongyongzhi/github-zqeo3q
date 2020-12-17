import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
     private cartservice : CartService ,
     private formBuilder : FormBuilder
  ) { 
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });
  }

  ngOnInit() {
      this.items= this.cartservice.getItems();
  }
  
  onsubmit(customData){
     this.cartservice.clearItems();
     this.checkoutForm.reset();
     console.warn("your order has been  submitted",customData);
  }
}