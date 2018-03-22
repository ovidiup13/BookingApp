import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Booking } from "../models/booking.interface";
import { environment } from "../../../environments/environment";

@Injectable()
export class BookingService {
  private static API: string = environment.api;

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${BookingService.API}/bookings`);
  }

  getBooking(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${BookingService.API}/bookings/${id}`);
  }

  updateBooking(booking: Booking): Observable<any> {
    return this.http.put<any>(
      `${BookingService.API}/bookings/${booking._id}`,
      booking
    );
  }

  createBooking(booking: Partial<Booking>): Observable<any> {
    return this.http.post<any>(`${BookingService.API}/bookings`, booking);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete<any>(`${BookingService.API}/bookings/${id}`);
  }
}
