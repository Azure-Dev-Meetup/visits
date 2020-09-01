import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html'
})
export class CardContentComponent implements OnInit {

  @Input() id;
  @Input() date;
  @Input() numberOfVisitors;
  @Input() arrivalTime;
  @Input() leavingTime;
  @Input() tablenumber;
  @Input() name;
  @Input() phone;
  @Input() street;
  @Input() plz;
  @Input() city;
  @Input() email;

  ngOnInit() {}
}
