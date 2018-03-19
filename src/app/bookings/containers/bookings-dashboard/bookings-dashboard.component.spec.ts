import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { BookingsDashboardComponent } from "./bookings-dashboard.component";
import { BookingService } from "../../services/booking.service";
import { Booking } from "../../models/booking.interface";

let bookingServiceStub: Partial<BookingService>;

describe("BookingsDashboardComponent", () => {
  let component: BookingsDashboardComponent;
  let fixture: ComponentFixture<BookingsDashboardComponent>;
  bookingServiceStub = {
    getBookings(): Observable<Booking[]> {
      return of(null);
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [BookingsDashboardComponent],
        providers: [{ provide: BookingService, useValue: bookingServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });
});
