import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Booking } from "../../models/booking.interface";

@Component({
  selector: "app-booking-form",
  template: `
    <div>
      <form [formGroup]="bookingForm" (submit)="updateBooking()" novalidate>

      <pre>{{bookingForm.value | json}}</pre>

        <h4>Service</h4>

        <div class="form-group">
          <label for="service-type">Service Type</label>
          <select class="form-control" id="service-type" formControlName="service" (ngModel)="booking.service">
            <option>reservation</option>
            <option>haircut</option>
            <option>meeting</option>
          </select>
        </div>

        <div class="form-group">
          <label for="resource">Resource</label>
          <select class="form-control" id="service-type" formControlName="resource">
            <option>staff</option>
            <option>intern</option>
            <option>director</option>
          </select>
        </div>

        <h4>Customer</h4>

        <fieldset formGroupName="customer">
          <div class='form-group'>
            <label for="first-name">First name</label>
            <input id="first-name" class="form-control" type="text" formControlName="firstName">
          </div>

          <div class='form-group'>
            <label for="last-name">Last name</label>        
            <input for="last-name" class="form-control" type="text" formControlName="lastName">
          </div>

          <div class='form-group'>
            <label for="email">Email</label>        
            <input id="email" class="form-control" type="email" formControlName="email">
          </div>
        </fieldset>

        <h4>Times</h4>

        <!-- TODO: datetime-local type falls back to text in some browsers e.g. Firefox 59 -->
        <div class="form-group">
          <label for="start-date">Start</label>
          <input id="start-date" class="form-control" type="datetime-local" formControlName="startTime">
        </div>

        <div class="form-group">
          <label for="end-date">End</label>
          <input id="end-date" class="form-control" type="datetime-local" formControlName="endTime">
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="this.bookingForm.invalid">Update</button>

        <!-- the false value in (click) is a hack to avoid redirect -->
        <a class="btn btn-secondary" href="#" (click)="cancelUpdate(); false" role="button">Cancel</a>
        <a class="btn btn-danger" href="#" (click)="deleteBooking(); false" role="button">Delete</a>
      </form>


    </div>
  `,
  styleUrls: ["./booking-form.component.css"]
})
export class BookingFormComponent implements OnChanges {
  @Input() booking: Booking;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<Booking> = new EventEmitter();
  @Output() delete: EventEmitter<Booking> = new EventEmitter();

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newValue = changes.booking.currentValue;
    // update form with booking data
    if (newValue != null) {
      this.bookingForm.reset();
      this.bookingForm.patchValue(newValue);
    }
  }

  createForm() {
    //TODO: check that end time is after start time
    this.bookingForm = this.fb.group({
      service: [null, Validators.required],
      resource: [null, Validators.required],
      customer: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]]
      }),
      startTime: [null, Validators.required],
      endTime: [null, Validators.required]
    });
  }

  cancelUpdate() {
    this.cancel.emit();
  }

  updateBooking() {
    // new booking object with form values and id
    const updated: Booking = {
      ...this.bookingForm.value,
      _id: this.booking._id
    };

    this.update.emit(updated);
  }

  deleteBooking() {
    this.delete.emit(this.booking);
  }
}
