import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div>
      <h1 class="title">Booking Management</h1>
      <p>Hello and welcome to the booking management web app!</p>
      <p>Click the <b>Dashboard</b> or <b>New Booking</b> links in the navbar to get started. </p>
    </div>
  `
})
export class HomeComponent {
  constructor() {}
}
