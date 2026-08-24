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
    const data = response.data;
    // Map accessToken to token if the backend returns accessToken
    if (data.accessToken && !data.token) {
      data.token = data.accessToken;
    }
    return data;
  },

  register: async (name: string, email: string, password: string, role: 'HOST' | 'GUEST'): Promise<LoginResponse> => {
    const response = await api.post('/auth/register', { name, email, password, role });
    const data = response.data;
    // Map accessToken to token if the backend returns accessToken
    if (data.accessToken && !data.token) {
      data.token = data.accessToken;
    }
    return data;
  },

  getProfile: async (): Promise<User> => {
    const response = await api.get('/users/profile');
    return response.data;
  }
};