"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedRoute({ children, requireRole }: { children: React.ReactNode, requireRole?: 'HOST' | 'GUEST' }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    } else if (!isLoading && isAuthenticated && requireRole && user?.role !== requireRole) {
      // Se tiver logado mas não tiver a role necessária, redireciona pro inicio
      router.push('/');
    }
  }, [isLoading, isAuthenticated, requireRole, user, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-muted-foreground animate-pulse">Carregando...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  if (requireRole && user?.role !== requireRole) return null;

  return <>{children}</>;
}
