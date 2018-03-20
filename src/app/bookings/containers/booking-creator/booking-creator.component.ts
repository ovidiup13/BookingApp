import { Component, OnInit } from "@angular/core";
import { Booking } from "../../models/booking.interface";
import { Router } from "@angular/router";
import { BookingService } from "../../services/booking.service";

@Component({
  selector: "app-booking-creator",
  template: `
    <div>
    <h1 class="title">Create booking</h1>
      <app-booking-form
        [newBooking]="true"
        (create)="handleCreate($event)"
        (cancel)="handleCancel()">
      </app-booking-form>
    </div>
  `,
  styleUrls: ["./booking-creator.component.css"]
})
export class BookingCreatorComponent implements OnInit {
  booking: Booking;

  constructor(private router: Router, private bookingService: BookingService) {}

  ngOnInit() {}

  handleCreate(event: Partial<Booking>) {
    console.log("Create booking", event);
    this.bookingService.createBooking(event).subscribe(
      () => {
        this.router.navigate(["/bookings"]);
      },
      // TODO: handle error
      (error: any) => {
        console.error(error);
      }
    );
  }

  handleCancel() {
    this.router.navigate(["/bookings"]);
  }
}
