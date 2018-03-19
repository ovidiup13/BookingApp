import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: "app-bookings-dashboard",
  template: `
    <div>
      <h1 class="title">Bookings Dashboard</h1>

      <div class="booking-list">
            <app-booking-detail 
              *ngFor="let booking of bookings$ | async"
              [booking]="booking"
              (view)="handleView($event)"
              (delete)="handleDelete($event)">
            </app-booking-detail>
      </div>

    </div>
  `,
  styleUrls: ["./bookings-dashboard.component.css"]
})
export class BookingsDashboardComponent implements OnInit {
  bookings$: Observable<Booking[]>;

  constructor(private router: Router, private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings$ = this.bookingService.getBookings();
  }

  handleView(event: Booking) {
    console.log("TODO: navigate to booking", event);
    // this.router.navigate(["/bookings", event._id]);
  }

  handleDelete(event: Booking) {
    console.log("TODO: delete booking", event);
  }
}
