import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BookingsDashboardComponent } from "./containers/bookings-dashboard/bookings-dashboard.component";
import { BookingViewerComponent } from "./containers/booking-viewer/booking-viewer.component";

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
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BookingsDashboardComponent, BookingViewerComponent]
})
export class BookingsModule {}
