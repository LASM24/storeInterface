import { Component, Renderer2 } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: any[];

  constructor(
    private cartService: CartService,
    private renderer: Renderer2,
    private localStorageService: LocalstorageService
  ) {
    this.items = this.localStorageService.loadItemsFromStorage();
  }

  clearCart() {
    this.items = [];
    this.localStorageService.clearItemsFromStorage();
  }

  addItemToCart(item: any) {
    this.items.push(item);
    this.localStorageService.saveItemsToStorage(this.items);
  }

  removeItemFromCart(index: number) {
    this.items.splice(index, 1);
    this.localStorageService.saveItemsToStorage(this.items);
  }


  ngOnInit() {
    if (this.items.length === 0) {
      this.items = this.cartService.getItems();
      this.localStorageService.saveItemsToStorage(this.items);
    } else {
      this.renderer.addClass(document.body, 'background-class');
      document.body.style.backgroundImage = 'url(../../../assets/img/fcart.jpg)';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.height = '100%';
      document.body.style.width = '100%';
    }
  }
}
