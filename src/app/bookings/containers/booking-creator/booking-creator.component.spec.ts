import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookingCreatorComponent } from "./booking-creator.component";
import { BookingFormComponent } from "../../components/booking-form/booking-form.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { BookingService } from "../../services/booking.service";
import { Observable } from "rxjs/Observable";
import { Booking } from "../../models/booking.interface";
import { of } from "rxjs/observable/of";

let bookingServiceStub: Partial<BookingService>;

describe("BookingCreatorComponent", () => {
  let component: BookingCreatorComponent;
  let fixture: ComponentFixture<BookingCreatorComponent>;
  bookingServiceStub = {
    getBooking(id: string): Observable<Booking> {
      return of(null);
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
        declarations: [BookingCreatorComponent, BookingFormComponent],
        providers: [{ provide: BookingService, useValue: bookingServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
