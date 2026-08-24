import { Booking } from "@/types/booking";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createBooking(data: Booking) {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar reserva");
  }

  return response.json();
}
