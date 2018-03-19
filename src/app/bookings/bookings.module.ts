import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { BookingsDashboardComponent } from "./containers/bookings-dashboard/bookings-dashboard.component";
import { BookingViewerComponent } from "./containers/booking-viewer/booking-viewer.component";
import { BookingDetailComponent } from "./components/booking-detail/booking-detail.component";
import { BookingService } from "./services/booking.service";

const routes: Routes = [
  {
    path: "bookings",
    children: [
      {
        path: "",
        component: BookingsDashboardComponent
      },
      {
        path: ":id",
        component: BookingViewerComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [
    BookingsDashboardComponent,
    BookingViewerComponent,
    BookingDetailComponent
  ],
  providers: [BookingService]
})
export class BookingsModule {}
