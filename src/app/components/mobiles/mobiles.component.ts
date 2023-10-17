import { Component, Renderer2 } from '@angular/core';
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
  

  constructor(
    private matDialog: MatDialog,
    private renderer: Renderer2
    ) {}

  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); 
  }

  openDialog(prodcut: Product) {
    this.matDialog.open(DialogMobilesComponent, {
      width: '400px', 
      height: '500px', 
      data: prodcut 
    });
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../assets/img/fmobiles.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
}

}
