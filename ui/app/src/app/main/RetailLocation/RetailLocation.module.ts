import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RETAILLOCATION_MODULE_DECLARATIONS, RetailLocationRoutingModule} from  './RetailLocation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RetailLocationRoutingModule
  ],
  declarations: RETAILLOCATION_MODULE_DECLARATIONS,
  exports: RETAILLOCATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RetailLocationModule { }