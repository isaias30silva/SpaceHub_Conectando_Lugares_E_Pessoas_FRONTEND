"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { spaceService } from "@/services/space.service";
import { Button } from "@/components/ui/button";

export default function EditSpacePage() {
  const router = useRouter();
  const params = useParams();
  const spaceId = params.id as string;
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [location, setLocation] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [featuresInput, setFeaturesInput] = useState("");

  useEffect(() => {
    async function fetchSpace() {
      try {
        const space = await spaceService.getSpaceById(spaceId);
        setTitle(space.title);
        setDescription(space.description);
        setPricePerNight(space.pricePerNight.toString());
        setMaxGuests(space.capacity.toString());
        setLocation(space.location);
        setPhotoUrl(space.images && space.images.length > 0 ? space.images[0] : "");
        setFeaturesInput(space.features ? space.features.join(", ") : "");
      } catch (err: any) {
        setError(err.response?.data?.message || "Erro ao carregar o espaço.");
      } finally {
        setFetching(false);
      }
    }
    if (spaceId) {
      fetchSpace();
    }
  }, [spaceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await spaceService.updateSpace(spaceId, {
        title,
        description,
        pricePerNight: Number(pricePerNight),
        capacity: Number(maxGuests),
        location,
        images: photoUrl ? [photoUrl] : [],
        features: featuresInput.split(',').map(f => f.trim()).filter(f => f)
      });
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao salvar o espaço.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="text-center py-10">Carregando...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Editar Espaço
          </h2>
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-600 bg-red-50 p-4 rounded-md">{error}</div>}
          
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título do Anúncio</label>
              <div className="mt-1">
                <input type="text" id="title" required value={title} onChange={e => setTitle(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
              <div className="mt-1">
                <textarea id="description" rows={3} required value={description} onChange={e => setDescription(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2" />
              </div>
              <p className="mt-2 text-sm text-gray-500">Escreva um resumo sobre o seu espaço e suas comodidades.</p>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localização (Cidade, Bairro)</label>
              <div className="mt-1">
                <input type="text" id="location" required value={location} onChange={e => setLocation(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço por Noite (R$)</label>
              <div className="mt-1">
                <input type="number" id="price" required min="1" value={pricePerNight} onChange={e => setPricePerNight(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Máx. Hóspedes</label>
              <div className="mt-1">
                <input type="number" id="guests" required min="1" value={maxGuests} onChange={e => setMaxGuests(e.target.value)}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">Características (separadas por vírgula)</label>
              <div className="mt-1">
                <input type="text" id="features" value={featuresInput} onChange={e => setFeaturesInput(e.target.value)} placeholder="Ex: Wi-Fi, Piscina, Churrasqueira"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">URL da Foto Principal (Link)</label>
              <div className="mt-1">
                <input type="url" id="photoUrl" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} placeholder="https://..."
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2" />
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-gray-200 mt-6 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => router.back()}>Cancelar</Button>
            <Button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Salvar Alterações'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
