const bookings = [
  {
    id: 1,
    guest: "Maria",
    space: "Coworking Paulista",
  },
  {
    id: 2,
    guest: "Pedro",
    space: "Loft Centro",
  },
];

export default function ReceivedBookings() {
  return (
    <section className="mb-10">
      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Reservas Recebidas
      </h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="
              border
              rounded-xl
              p-4
            "
          >
            <p>{booking.guest}</p>

            <p
              className="
                text-sm
                text-slate-600
              "
            >
              {booking.space}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
