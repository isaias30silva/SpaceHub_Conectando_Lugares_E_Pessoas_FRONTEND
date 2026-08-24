"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Space, spaceService } from "@/services/space.service";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SpacesList() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpaces() {
      setLoading(true);
      try {
        const data = await spaceService.getAllSpaces({ location: locationParam || undefined });
        setSpaces(data);
      } catch (error) {
        console.error("Failed to load spaces", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSpaces();
  }, [locationParam]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {locationParam ? `Resultados em "${locationParam}"` : "Todos os espaços disponíveis"}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {spaces.length} {spaces.length === 1 ? 'espaço encontrado' : 'espaços encontrados'}
          </p>
        </div>
        <Link href="/">
          <Button variant="outline">Nova Busca</Button>
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <p className="text-gray-500 animate-pulse">Buscando espaços...</p>
        </div>
      ) : spaces.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-medium text-gray-900">Nenhum espaço encontrado</h3>
          <p className="mt-1 text-gray-500">Tente buscar por outro termo ou cidade.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <Link key={space.id} href={`/spaces/${space.id}`} className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative h-48">
                {space.images && space.images.length > 0 ? (
                  <img src={space.images[0]} alt={space.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">Sem foto</div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-gray-500 mb-1">{space.location}</p>
                <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{space.title}</h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{space.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    R$ {space.pricePerNight} <span className="text-sm font-normal text-gray-500">/noite</span>
                  </span>
                  <span className="text-xs text-gray-500">Até {space.capacity} {space.capacity === 1 ? 'pessoa' : 'pessoas'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SpacesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="p-8 text-center">Carregando...</div>}>
        <SpacesList />
      </Suspense>
    </div>
  );
}
