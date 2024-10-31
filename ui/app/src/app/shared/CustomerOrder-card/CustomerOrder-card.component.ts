import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CustomerOrder-card.component.html',
  styleUrls: ['./CustomerOrder-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CustomerOrder-card]': 'true'
  }
})

export class CustomerOrderCardComponent {


}