import { Availability } from "@/types/availability";

export async function getAvailability(spaceId: string): Promise<Availability> {
  return {
    spaceId,

    blockedDates: [10, 11, 12, 20],
  };
}
