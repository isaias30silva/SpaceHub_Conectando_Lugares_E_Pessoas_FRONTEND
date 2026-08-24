import { api } from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'HOST' | 'GUEST';
}

export interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (name: string, email: string, password: string, role: 'HOST' | 'GUEST'): Promise<LoginResponse> => {
    const response = await api.post('/auth/register', { name, email, password, role });
    return response.data;
  },

  getProfile: async (): Promise<User> => {
    const response = await api.get('/users/profile');
    return response.data;
  }
};