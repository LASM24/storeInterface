import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product, products } from 'src/app/mobiles';
import { DialogMobilesComponent } from '../dialog-mobiles/dialog-mobiles.component';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent {
  products = [...products]; 

  constructor(private matDialog: MatDialog) {}

  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); // accion de la funcion, en este caso, mostrar un alert
  }

  openDialog(prodcut: Product) {
    this.matDialog.open(DialogMobilesComponent, {
      width: '400px', 
      height: '500px', 
      data: prodcut // Pasando el objeto pc al diálogo
    });
  }

}
