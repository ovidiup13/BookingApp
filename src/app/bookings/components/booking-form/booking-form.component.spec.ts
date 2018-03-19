import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookingFormComponent } from "./booking-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("BookingFormComponent", () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [BookingFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
