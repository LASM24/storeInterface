import { Component, Renderer2 } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private renderer: Renderer2
    ){}

  clearCart(){
    this.items = [];
    return this.items;
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../assets/img/fcart.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
}

}