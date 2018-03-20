import { Component, OnInit } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  nav: Nav[] = [
    {
      link: "/bookings",
      name: "Dashboard",
      exact: true
    },
    {
      link: "/bookings/new",
      name: "New Booking",
      exact: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
