import { Component } from '@angular/core';
import { BusbookingService } from '../busbooking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.css'],
  providers: [BusbookingService],
})
export class Agent2Component {
  ticket2!: number[];

  constructor(private busBookingService2: BusbookingService) {
    this.ticket2 = this.busBookingService2.getTicket();
  }

  booking(val: any) {
    this.busBookingService2.bookTicket(val);
    this.ticket2 = this.busBookingService2.getTicket();
  }
}
