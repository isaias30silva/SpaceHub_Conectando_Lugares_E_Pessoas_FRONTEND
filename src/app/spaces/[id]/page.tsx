"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Space, spaceService } from "@/services/space.service";
import { reservationService } from "@/services/reservation.service";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export default function SpaceDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  
  const [space, setSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Booking state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    async function fetchSpace() {
      try {
        const data = await spaceService.getSpaceById(id as string);
        setSpace(data);
      } catch (error) {
        console.error("Failed to load space details", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSpace();
  }, [id]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    if (user?.role === "HOST") {
      setBookingError("Apenas Hóspedes (GUESTS) podem fazer reservas.");
      return;
    }
    
    setBookingLoading(true);
    setBookingError("");
    
    try {
      // Basic validation
      if (new Date(startDate) >= new Date(endDate)) {
        throw new Error("A data de saída deve ser após a data de entrada.");
      }
      
      await reservationService.createReservation({
        spaceId: id as string,
        startDate,
        endDate
      });
      setBookingSuccess(true);
    } catch (err: any) {
      setBookingError(err.response?.data?.message || err.message || "Erro ao fazer reserva. Verifique a disponibilidade.");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Carregando detalhes...</div>;
  if (!space) return <div className="p-8 text-center text-red-500">Espaço não encontrado.</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6 -ml-4">
          &larr; Voltar
        </Button>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="w-full aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-200 shadow-md">
              {space.photos && space.photos.length > 0 ? (
                <img src={space.photos[0]} alt={space.title} className="w-full h-full object-center object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">Nenhuma foto disponível</div>
              )}
            </div>
          </div>

          {/* Space info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{space.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Informações do espaço</h2>
              <p className="text-3xl text-gray-900">R$ {space.pricePerNight} <span className="text-lg font-normal text-gray-500">/noite</span></p>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="font-semibold mr-2">Localização:</span> {space.location}
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="font-semibold mr-2">Máximo de Hóspedes:</span> {space.maxGuests}
              </div>
              <h3 className="text-lg font-medium text-gray-900">Sobre este espaço</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <p>{space.description}</p>
              </div>
            </div>

            {/* Booking Card */}
            <div className="mt-10 border border-gray-200 bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reserve este espaço</h3>
              
              {bookingSuccess ? (
                <div className="bg-green-50 p-4 rounded-md border border-green-200">
                  <h4 className="text-green-800 font-medium">Reserva Confirmada!</h4>
                  <p className="text-green-600 text-sm mt-1">Sua reserva foi realizada com sucesso.</p>
                  <Button className="mt-4 w-full" onClick={() => router.push('/my-reservations')}>
                    Ver minhas reservas
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  {bookingError && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{bookingError}</div>}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Entrada</label>
                      <input 
                        type="date" 
                        id="startDate" 
                        required 
                        min={new Date().toISOString().split('T')[0]}
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Saída</label>
                      <input 
                        type="date" 
                        id="endDate" 
                        required 
                        min={startDate || new Date().toISOString().split('T')[0]}
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={bookingLoading}>
                    {bookingLoading ? 'Processando...' : 'Reservar agora'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
