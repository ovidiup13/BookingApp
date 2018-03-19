import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Booking } from "../../models/booking.interface";

@Component({
  selector: "app-booking-detail",
  template: `
    <div class="booking">
      <h4>{{booking?.service}}</h4>
      <p>
        For {{customerName}} at {{booking?.startTime | date:'medium'}}.
      </p>
      <button class="btn btn-primary" (click)="viewBooking()">View</button>
      <button class="btn btn-danger" (click)="deleteBooking()">Delete</button>
    </div>
  `,
  styleUrls: ["./booking-detail.component.css"]
})
export class BookingDetailComponent {
  @Input() booking: Booking;
  @Output() view: EventEmitter<Booking> = new EventEmitter();
  @Output() delete: EventEmitter<Booking> = new EventEmitter();

  constructor() {}

  get customerName(): string {
    if (this.booking == null) {
      return "";
    }
    return (
      this.booking.customer.firstName + " " + this.booking.customer.lastName
    );
  }

  viewBooking() {
    this.view.emit(this.booking);
  }

  deleteBooking() {
    this.delete.emit(this.booking);
  }
}
