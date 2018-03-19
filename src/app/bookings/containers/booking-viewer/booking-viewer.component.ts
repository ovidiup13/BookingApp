import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-booking-viewer",
  template: `
    <div>
      <h1 class="title">Update booking</h1>
      <app-booking-form
        [booking]="booking$ | async" 
        (cancel)="handleCancel($event)" 
        (update)="handleUpdate($event)" 
        (delete)="handleDelete($event)">
      </app-booking-form>
    </div>
  `,
  styleUrls: ["./booking-viewer.component.css"]
})
export class BookingViewerComponent implements OnInit {
  booking$: Observable<Booking>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.booking$ = this.bookingService.getBooking(params.id);
    });
  }

  handleCancel(event: any) {
    this.router.navigate(["/bookings"]);
  }

  handleUpdate(event: Booking) {
    // update booking
    // if successful, navigate to dashboard
    this.bookingService.updateBooking(event).subscribe(
      () => {
        this.router.navigate(["/bookings"]);
      },
      (error: any) => {
        // TODO: handle error
        console.error(error);
      }
    );
  }

  handleDelete(event: Booking) {
    console.log("TODO: delete booking", event);
  }
}
