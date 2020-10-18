import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CorporativosRoutingModule } from './corporativos-routing.module';

import { CorporativosComponent } from "./corporativos.component";


@NgModule({
  imports: [
    CommonModule,
    CorporativosRoutingModule,
    NgxDatatableModule
  ],
  exports: [],
  declarations: [
    CorporativosComponent
  ],
  providers: []

})
export class CorporativosModule { }
