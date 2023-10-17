import { Component, Renderer2 } from '@angular/core';
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

  constructor(
    private matDialog: MatDialog,
    private renderer: Renderer2
    ) {}

  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); 
  }

  openDialog(pc: Productpc) {
    this.matDialog.open(DialogLaptopsComponent, {
      width: '400px', 
      height: '475px', 
      data: pc 
    });
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'background-class');
    document.body.style.backgroundImage = 'url(../../../assets/img/flaptops.jpeg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
}
}
