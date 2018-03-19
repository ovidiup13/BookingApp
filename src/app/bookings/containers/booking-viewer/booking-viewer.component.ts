import { Component, OnInit } from "@angular/core";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

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
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.booking$ = this.bookingService.getBooking(params.id);
    });
  }

  handleCancel(event: any) {
    console.log("TODO: navigate to dashboard");
  }

  handleUpdate(event: Booking) {
    console.log("TODO: update booking", event);
  }

  handleDelete(event: Booking) {
    console.log("TODO: delete booking", event);
  }
}
