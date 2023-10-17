import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/mobiles';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog-mobiles',
  templateUrl: './dialog-mobiles.component.html',
  styleUrls: ['./dialog-mobiles.component.scss']
})
export class DialogMobilesComponent {
  product: Product | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogMobilesComponent>,
    private cartService: CartService
  ) {
    this.product = data;
  }

  addToCart(productpc: Product) {
    this.cartService.addToCart(productpc);
  }
}
