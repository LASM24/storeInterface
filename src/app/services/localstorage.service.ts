import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  items = this.cartService.getItems();
  constructor(private cartService: CartService){}

  saveItems(){
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  
}
