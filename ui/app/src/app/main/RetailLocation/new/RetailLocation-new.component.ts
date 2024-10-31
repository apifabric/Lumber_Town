import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RetailLocation-new',
  templateUrl: './RetailLocation-new.component.html',
  styleUrls: ['./RetailLocation-new.component.scss']
})
export class RetailLocationNewComponent {
  @ViewChild("RetailLocationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}