import { api } from './api';

export interface Reservation {
  id: string;
  spaceId: string;
  guestId: string;
  startDate: string; // Using startDate as typical in backend
  endDate: string;   // Using endDate as typical in backend
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  totalPrice: number;
  space?: {
    title: string;
    location: string;
  };
}

export type CreateReservationDTO = {
  spaceId: string;
  startDate: string;
  endDate: string;
};

export const reservationService = {
  getMyReservations: async (): Promise<Reservation[]> => {
    const response = await api.get('/bookings/my-bookings'); // usually /reservations gets current user's reservations
    return response.data;
  },

  createReservation: async (data: CreateReservationDTO): Promise<Reservation> => {
    const response = await api.post('/bookings', data);
    return response.data;
  },

  cancelReservation: async (id: string): Promise<void> => {
    await api.patch(`/bookings/${id}/cancel`); // Assuming patch to cancel
  },

  checkAvailability: async (spaceId: string, startDate: string, endDate: string): Promise<boolean> => {
    try {
      const response = await api.get('/availability', {
        params: { spaceId, startDate, endDate }
      });
      return response.data.available ?? true;
    } catch {
      return true;
    }
  }
};