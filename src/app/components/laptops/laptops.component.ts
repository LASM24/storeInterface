import { Component } from '@angular/core';
import { pcproducts } from 'src/app/laptops';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent {
  pclist = [...pcproducts];

  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); // accion de la funcion, en este caso, mostrar un alert
  }

  onNotify(){
    window.alert('se le notificara cuando el producto salga a la vente');  
    // al escuchar el evento ya relacionado con el componente padre (product-list) se muestra esta alerta
  }
}
