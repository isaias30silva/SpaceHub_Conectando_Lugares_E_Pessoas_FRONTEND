export interface AvailabilityResponse {
  spaceId: string;

  blockedDates: string[];
}

export async function getAvailability(spaceId: string) {
  console.log("Buscar disponibilidade", spaceId);
}
