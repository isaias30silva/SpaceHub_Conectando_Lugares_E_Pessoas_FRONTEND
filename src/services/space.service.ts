import { api } from './api';

export interface Space {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  location: string;
  photos: string[];
  hostId: string;
}

export type CreateSpaceDTO = Omit<Space, 'id' | 'hostId'>;

export const spaceService = {
  getAllSpaces: async (params?: { location?: string; checkIn?: string; checkOut?: string }): Promise<Space[]> => {
    const response = await api.get('/spaces', { params });
    return response.data;
  },

  getSpaceById: async (id: string): Promise<Space> => {
    const response = await api.get(`/spaces/${id}`);
    return response.data;
  },

  getMySpaces: async (): Promise<Space[]> => {
    const response = await api.get('/spaces/my-spaces');
    return response.data;
  },

  createSpace: async (data: CreateSpaceDTO): Promise<Space> => {
    const response = await api.post('/spaces', data);
    return response.data;
  },

  updateSpace: async (id: string, data: Partial<CreateSpaceDTO>): Promise<Space> => {
    const response = await api.put(`/spaces/${id}`, data);
    return response.data;
  },

  deleteSpace: async (id: string): Promise<void> => {
    await api.delete(`/spaces/${id}`);
  }
};