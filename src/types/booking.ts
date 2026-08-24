export interface Booking {
  id?: string;

  spaceId: string;

  guestId: string;

  checkIn: string;

  checkOut: string;

  guests: number;

  totalPrice: number;
}
