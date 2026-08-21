import Link from "next/link";

export default function BookingSuccess() {
  return (
    <div
      className="
        border
        rounded-2xl

        p-8

        text-center

        shadow-sm
      "
    >
      <div
        className="
          text-5xl
        "
      >
        🎉
      </div>

      <h1
        className="
          mt-6

          text-3xl

          font-bold
        "
      >
        Reserva confirmada!
      </h1>

      <p
        className="
          mt-3

          text-slate-600
        "
      >
        Sua estadia foi reservada com sucesso.
      </p>

      <div
        className="
          mt-6

          bg-slate-50

          rounded-xl

          p-4
        "
      >
        <p
          className="
            text-sm

            text-slate-500
          "
        >
          Código da reserva
        </p>

        <strong
          className="
            text-lg
          "
        >
          SPH-20260714-001
        </strong>
      </div>

      <div
        className="
          mt-8

          flex

          flex-col

          sm:flex-row

          gap-4
        "
      >
        <Link
          href="/dashboard/guest"
          className="
            flex-1

            bg-emerald-600

            text-white

            rounded-lg

            py-3

            font-semibold

            hover:bg-emerald-700

            transition
          "
        >
          Minhas reservas
        </Link>

        <Link
          href="/spaces"
          className="
            flex-1

            border

            rounded-lg

            py-3

            font-semibold

            hover:bg-slate-50

            transition
          "
        >
          Explorar espaços
        </Link>
      </div>
    </div>
  );
}
