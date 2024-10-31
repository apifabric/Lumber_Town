import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CUSTOMERORDER_MODULE_DECLARATIONS, CustomerOrderRoutingModule} from  './CustomerOrder-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CustomerOrderRoutingModule
  ],
  declarations: CUSTOMERORDER_MODULE_DECLARATIONS,
  exports: CUSTOMERORDER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerOrderModule { }