import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
