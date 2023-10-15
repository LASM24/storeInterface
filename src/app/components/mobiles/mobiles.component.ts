import { Component } from '@angular/core';
import { products } from 'src/app/mobiles';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent {
  products = [...products]; 

  
  share(name:string) { 
    window.alert('El producto ' + name + ' se ha compartido'); // accion de la funcion, en este caso, mostrar un alert
  }

  onNotify(){
    window.alert('se le notificara cuando el producto salga a la vente');  
    // al escuchar el evento ya relacionado con el componente padre (product-list) se muestra esta alerta
  }

}
