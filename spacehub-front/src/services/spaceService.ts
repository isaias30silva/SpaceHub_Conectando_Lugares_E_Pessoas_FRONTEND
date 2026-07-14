export interface CreateSpaceDTO {
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
}

export async function createSpace(data: CreateSpaceDTO) {
  console.log(data);
}
