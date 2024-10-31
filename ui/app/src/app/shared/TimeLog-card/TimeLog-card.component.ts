import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TimeLog-card.component.html',
  styleUrls: ['./TimeLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TimeLog-card]': 'true'
  }
})

export class TimeLogCardComponent {


}