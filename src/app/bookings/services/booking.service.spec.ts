import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { BookingService } from "./booking.service";

describe("BookingService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingService]
    });
  });

  it(
    "should be created",
    inject([BookingService], (service: BookingService) => {
      expect(service).toBeTruthy();
    })
  );
});
