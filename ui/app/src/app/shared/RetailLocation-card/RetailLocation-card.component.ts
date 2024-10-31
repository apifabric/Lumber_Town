import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RetailLocation-card.component.html',
  styleUrls: ['./RetailLocation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RetailLocation-card]': 'true'
  }
})

export class RetailLocationCardComponent {


}