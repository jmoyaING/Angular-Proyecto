import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DetalleCorporativosRoutingModule } from './detalle-corporativos-routing.module';

import { DetalleCorporativosComponent } from "./detalle-corporativos.component";
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DetalleCorporativosRoutingModule,
    NgxDatatableModule,
FormsModule,
ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    DetalleCorporativosComponent
  ],
  providers: []

})
export class DetalleCorporativosModule { }
