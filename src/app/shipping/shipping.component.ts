import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
   shippingCosts;
   checkoutForm;

  constructor(
     private cartservice : CartService,
     private formBuilder : FormBuilder

  ) { 
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });
  }

  ngOnInit() {

     this.shippingCosts=this.cartservice.getShopingPrice();

  }

  getShippingPrice(){
    return this.cartservice.getShopingPrice();
  }

  onsubmit(customData){
     this.cartservice.clearItems();
     this.checkoutForm.reset();
     console.warn("your order has been  submitted",customData);
  }
}