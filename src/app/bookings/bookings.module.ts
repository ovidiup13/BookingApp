import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { BookingsDashboardComponent } from "./containers/bookings-dashboard/bookings-dashboard.component";
import { BookingViewerComponent } from "./containers/booking-viewer/booking-viewer.component";
import { BookingDetailComponent } from "./components/booking-detail/booking-detail.component";
import { BookingService } from "./services/booking.service";
import { BookingFormComponent } from "./components/booking-form/booking-form.component";
import { BookingCreatorComponent } from "./containers/booking-creator/booking-creator.component";

const routes: Routes = [
  {
    path: "bookings",
    children: [
      {
        path: "",
        component: BookingsDashboardComponent
      },
      {
        path: "new",
        component: BookingCreatorComponent
      },
      {
        path: ":id",
        component: BookingViewerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BookingsDashboardComponent,
    BookingViewerComponent,
    BookingDetailComponent,
    BookingFormComponent,
    BookingCreatorComponent
  ],
  providers: [BookingService]
})
export class BookingsModule {}
