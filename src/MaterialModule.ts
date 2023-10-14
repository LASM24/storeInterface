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


@NgModule({
    exports:[
        // navegacion 
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        // Home
        MatCardModule,
    ]

})


export class MaterialModule {}