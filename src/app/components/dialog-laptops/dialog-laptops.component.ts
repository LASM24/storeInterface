import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Productpc } from 'src/app/laptops';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog-laptops',
  templateUrl: './dialog-laptops.component.html',
  styleUrls: ['./dialog-laptops.component.scss']
})
export class DialogLaptopsComponent {
  productpc: Productpc | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogLaptopsComponent>,
    private cartService: CartService
  ) {
    this.productpc = data;
  }

  addToCart(productpc: Productpc) {
    this.cartService.addToCart(productpc);
    window.alert('Product added successfully');
  }
}
