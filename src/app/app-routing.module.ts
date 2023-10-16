import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes para los paths
import { HomeComponent } from './components/home/home.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { CartComponent } from './components/cart/cart.component';
import { DialogLaptopsComponent } from './components/dialog-laptops/dialog-laptops.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'mobiles', component: MobilesComponent  },
  { path: 'laptops', component: LaptopsComponent  },
  { path: 'cart', component: CartComponent },
  { path: 'dialoglaptops', component: DialogLaptopsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
