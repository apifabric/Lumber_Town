import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CustomerOrder-new',
  templateUrl: './CustomerOrder-new.component.html',
  styleUrls: ['./CustomerOrder-new.component.scss']
})
export class CustomerOrderNewComponent {
  @ViewChild("CustomerOrderForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}