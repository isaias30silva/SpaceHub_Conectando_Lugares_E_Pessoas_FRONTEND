"use client";

import { useEffect, useState } from "react";
import { Space, spaceService } from "@/services/space.service";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpaces() {
      try {
        const data = await spaceService.getMySpaces();
        setSpaces(data);
      } catch (error) {
        console.error("Failed to load spaces", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSpaces();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este espaço?")) {
      try {
        await spaceService.deleteSpace(id);
        setSpaces(spaces.filter(s => s.id !== id));
      } catch (error) {
        alert("Erro ao excluir o espaço.");
      }
    }
  };

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Meus Espaços
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie os locais que você anunciou para locação.
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <Link href="/dashboard/spaces/new">
            <Button>Cadastrar Novo Espaço</Button>
          </Link>
        </div>
      </div>

      {loading ? (
        <p>Carregando seus espaços...</p>
      ) : spaces.length === 0 ? (
        <div className="text-center bg-white p-12 rounded-lg border border-dashed border-gray-300">
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Nenhum espaço cadastrado</h3>
          <p className="mt-1 text-sm text-gray-500">Comece adicionando seu primeiro imóvel ou sala.</p>
          <div className="mt-6">
            <Link href="/dashboard/spaces/new">
              <Button>Criar meu primeiro anúncio</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) => (
            <div key={space.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 flex flex-col">
              <div className="h-48 bg-gray-200 w-full relative">
                {space.images && space.images.length > 0 ? (
                  <img src={space.images[0]} alt={space.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">Sem foto</div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 truncate">{space.title}</h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{space.description}</p>
                <div className="mt-4 flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-gray-900">
                    R$ {space.pricePerNight} <span className="text-sm font-normal text-gray-500">/noite</span>
                  </span>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/spaces/${space.id}/edit`}>
                      <Button variant="outline" size="sm">Editar</Button>
                    </Link>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(space.id)}>Excluir</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
