export interface Space {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;

  imageUrl?: string;

  rating?: number;
  category?: string;
}