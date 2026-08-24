"use client";

import { useEffect, useState } from "react";
import { Reservation, reservationService } from "@/services/reservation.service";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function MyReservationsPage() {
  const { logout, user } = useAuth();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await reservationService.getMyReservations();
        setReservations(data);
      } catch (error) {
        console.error("Failed to load reservations", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
  }, []);

  const handleCancel = async (id: string) => {
    if (confirm("Tem certeza que deseja cancelar esta reserva?")) {
      try {
        await reservationService.cancelReservation(id);
        // Atualiza a lista localmente
        setReservations(reservations.map(r => r.id === id ? { ...r, status: 'CANCELLED' } : r));
      } catch (error) {
        alert("Erro ao cancelar a reserva.");
      }
    }
  };

  return (
    <ProtectedRoute requireRole="GUEST">
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex">
                <Link href="/" className="text-xl font-bold text-blue-600">
                  SpaceHub
                </Link>
                <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/my-reservations" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Minhas Reservas
                  </Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Olá, {user?.name}</span>
                <button onClick={logout} className="text-sm font-medium text-red-600 hover:text-red-500">
                  Sair
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Minhas Reservas
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Acompanhe suas viagens e locações agendadas.
              </p>
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <Link href="/">
                <Button>Explorar Espaços</Button>
              </Link>
            </div>
          </div>

          {loading ? (
            <p>Carregando suas reservas...</p>
          ) : reservations.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-lg border border-dashed border-gray-300">
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Nenhuma reserva encontrada</h3>
              <p className="mt-1 text-sm text-gray-500">Você ainda não reservou nenhum espaço.</p>
              <div className="mt-6">
                <Link href="/">
                  <Button>Buscar meu primeiro espaço</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
              <ul className="divide-y divide-gray-200">
                {reservations.map((reservation) => (
                  <li key={reservation.id}>
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {reservation.space?.title || `Espaço #${reservation.spaceId.substring(0, 8)}`}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${reservation.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : ''}
                            ${reservation.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${reservation.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                          `}>
                            {reservation.status === 'CONFIRMED' && 'Confirmada'}
                            {reservation.status === 'PENDING' && 'Pendente'}
                            {reservation.status === 'CANCELLED' && 'Cancelada'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex flex-col text-sm text-gray-500">
                          <p>
                            Entrada: {new Date(reservation.startDate || reservation.checkIn).toLocaleDateString('pt-BR')}
                          </p>
                          <p>
                            Saída: {new Date(reservation.endDate || reservation.checkOut).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 gap-4">
                          <span className="font-bold text-gray-900">Total: R$ {reservation.totalPrice}</span>
                          
                          {(reservation.status === 'PENDING' || reservation.status === 'CONFIRMED') && (
                            <Button variant="destructive" size="sm" onClick={() => handleCancel(reservation.id)}>
                              Cancelar
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
