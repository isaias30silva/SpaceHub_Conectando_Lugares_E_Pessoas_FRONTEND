"use client";

import { useState } from "react";

export default function ConfirmBooking() {

  const [loading, setLoading] = useState(false);


  async function handleConfirmBooking() {

    setLoading(true);


    /*
      Futuramente:

      await bookingService.createBooking({
        spaceId,
        guestId,
        checkIn,
        checkOut
      })

    */


    setTimeout(() => {

      setLoading(false);

      alert("Reserva realizada com sucesso!");

    }, 1000);

  }


  return (

    <button
      onClick={handleConfirmBooking}

      disabled={loading}

      className="
        w-full

        bg-emerald-600

        text-white

        rounded-xl

        py-4

        font-semibold

        text-lg

        hover:bg-emerald-700

        transition

        disabled:
        opacity-50
      "
    >

      {
        loading
          ? "Confirmando..."
          : "Confirmar reserva"
      }


    </button>

  );

}