import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-bookings-dashboard",
  templateUrl: "./bookings-dashboard.component.html",
  styleUrls: ["./bookings-dashboard.component.css"]
})
export class BookingsDashboardComponent implements OnInit {
  bookings$: Observable<Booking[]>;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings$ = this.bookingService.getBookings();
  }
}
