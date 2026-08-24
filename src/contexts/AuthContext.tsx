"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { User, authService } from '../services/auth.service';

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromStorage() {
      const token = localStorage.getItem('@SpaceHub:token');
      const storedUser = localStorage.getItem('@SpaceHub:user');

      if (token && storedUser) {
        try {
          // You could also call getProfile() here to ensure the token is still valid
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing user from storage", error);
          logout();
        }
      }
      setIsLoading(false);
    }

    loadUserFromStorage();
  }, []);

  const login = (token: string, loggedUser: User) => {
    localStorage.setItem('@SpaceHub:token', token);
    localStorage.setItem('@SpaceHub:user', JSON.stringify(loggedUser));
    setUser(loggedUser);
    
    // Redirect based on role
    if (loggedUser.role === 'HOST') {
      router.push('/dashboard');
    } else {
      router.push('/');
    }
  };

  const logout = () => {
    localStorage.removeItem('@SpaceHub:token');
    localStorage.removeItem('@SpaceHub:user');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
