export interface Booking {
  _id: string;
  customer: Customer;
  resource: string;
  service: string;
  startTime: Date;
  endTime: Date;
}

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
}
