"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isAuthenticated, user, logout } = useAuth();
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location) {
      router.push(`/spaces?location=${encodeURIComponent(location)}`);
    } else {
      router.push('/spaces');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SpaceHub
            </Link>
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-600">Olá, {user?.name}</span>
                  {user?.role === 'HOST' ? (
                    <Link href="/dashboard"><Button variant="outline">Meu Painel</Button></Link>
                  ) : (
                    <Link href="/my-reservations"><Button variant="outline">Minhas Reservas</Button></Link>
                  )}
                  <Button variant="ghost" onClick={logout}>Sair</Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">Entrar</Link>
                  <Link href="/register"><Button>Cadastrar</Button></Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Encontre o espaço perfeito para você
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De salas de reunião a apartamentos inteiros. Alugue espaços incríveis com facilidade e segurança.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex gap-2 max-w-xl mx-auto p-2 bg-white rounded-full shadow-lg border border-gray-200">
            <input 
              type="text" 
              placeholder="Para onde você vai? (Ex: São Paulo)"
              className="flex-1 px-6 py-3 rounded-l-full outline-none text-gray-700 bg-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="submit" size="lg" className="rounded-full px-8">
              Buscar
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
