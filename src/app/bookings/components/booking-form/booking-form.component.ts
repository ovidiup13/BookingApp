import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Booking } from "../../models/booking.interface";

@Component({
  selector: "app-booking-form",
  template: `
    <div>
      <form [formGroup]="bookingForm" (submit)="updateBooking()">

        <h4>Service</h4>

        <div class="form-group">
          <label for="service-type">Service Type</label>
          <select class="form-control" id="service-type">
            <option>reservation</option>
            <option>haircut</option>
            <option>meeting</option>
          </select>
        </div>
        <div class="form-group">
          <label for="resource">Resource</label>
            <select class="form-control" id="service-type">
            <option>staff</option>
            <option>intern</option>
            <option>director</option>
          </select>
        </div>

        <h4>Customer</h4>

        <div class='form-group'>
          <label for="first-name">First name</label>
          <input id="first-name" class="form-control" type="text">
        </div>

        <div class='form-group'>
          <label for="last-name">Last name</label>        
          <input for="last-name" class="form-control" type="text">
        </div>

        <div class='form-group'>
          <label for="email">Email</label>        
          <input id="email" class="form-control" type="email">
        </div>

        <h4>Times</h4>

        <div class="form-group">
          <label for="start-date">Start date</label>
          <input id="start-date" class="form-control" type="date">
          <label for="start-time">Start time</label>
          <input id="start-time" class="form-control" type="time">
        </div>

        <div class="form-group">
          <label for="end-date">End date</label>
          <input id="end-date" class="form-control" type="date">
          <label for="end-time">End time</label>
          <input id="end-time" class="form-control" type="time">
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  `,
  styleUrls: ["./booking-form.component.css"]
})
export class BookingFormComponent implements OnChanges {
  @Input() booking: Booking;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<Booking> = new EventEmitter();

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: update form on changes
  }

  createForm() {
    this.bookingForm = this.fb.group({
      type: ["", Validators.required]
    });
  }

  cancelUpdate() {
    this.cancel.emit();
  }

  updateBooking() {
    this.update.emit(this.booking);
  }
}
