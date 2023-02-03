import { Component } from '@angular/core';
import { BusbookingService } from '../busbooking.service';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.css'],
  providers: [BusbookingService],
})
export class Agent1Component {
  tickets1!: number[];
  constructor(private busBookingService1: BusbookingService) {
    this.tickets1 = this.busBookingService1.getTicket();
  }

  booking(val: any) {
    this.busBookingService1.bookTicket(val);
    this.tickets1 = this.busBookingService1.getTicket();
  }
}
