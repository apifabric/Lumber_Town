import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TIMELOG_MODULE_DECLARATIONS, TimeLogRoutingModule} from  './TimeLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TimeLogRoutingModule
  ],
  declarations: TIMELOG_MODULE_DECLARATIONS,
  exports: TIMELOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimeLogModule { }