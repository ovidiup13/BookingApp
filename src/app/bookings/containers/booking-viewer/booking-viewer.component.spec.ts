import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookingViewerComponent } from "./booking-viewer.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { BookingFormComponent } from "../../components/booking-form/booking-form.component";
import { ReactiveFormsModule } from "@angular/forms";

let bookingServiceStub: Partial<BookingService>;

describe("BookingViewerComponent", () => {
  let component: BookingViewerComponent;
  let fixture: ComponentFixture<BookingViewerComponent>;
  bookingServiceStub = {
    getBooking(id: string): Observable<Booking> {
      return of(null);
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule.withRoutes([]),
          ReactiveFormsModule
        ],
        declarations: [BookingViewerComponent, BookingFormComponent],
        providers: [{ provide: BookingService, useValue: bookingServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
