import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Productpc, pcproducts } from 'src/app/laptops';
import { DialogLaptopsComponent } from '../dialog-laptops/dialog-laptops.component';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent {
  pclist = [...pcproducts];

  constructor(private matDialog: MatDialog) {}

  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); 
  }

  openDialog(pc: Productpc) {
    this.matDialog.open(DialogLaptopsComponent, {
      width: '400px', 
      height: '500px', 
      data: pc // Pasando el objeto pc al diálogo
    });
  
  }
  
}
