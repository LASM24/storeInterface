import { NgModule } from "@angular/core";

/* componentes de Angular material: */
// Navegacion  
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"; 
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
// Home
import { MatCardModule} from '@angular/material/card';

// Info
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    exports:[
        // Generales
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatMenuModule,
        // Home
        MatCardModule,
        // Info
        MatDialogModule,
    ]

})


export class MaterialModule {}