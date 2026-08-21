import Button from "@/components/ui/Button";

export default function ReservationCard() {
  return (
    <div
      className="
        border
        rounded-xl
        p-5
        sticky
        top-24
        shadow-sm
      "
    >
      <h3
        className="
          text-2xl
          font-bold
        "
      >
        R$ 150/noite
      </h3>

      <div className="mt-5 space-y-3">
        <input
          type="date"
          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

        <input
          type="date"
          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

        <input
          type="number"
          min="1"
          placeholder="Hóspedes"
          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />
      </div>

      <div
        className="
          mt-6
          space-y-2
          text-sm
        "
      >
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ 300</span>
        </div>

        <div className="flex justify-between">
          <span>Taxa de serviço</span>
          <span>R$ 30</span>
        </div>

        <hr />

        <div
          className="
            flex
            justify-between
            font-semibold
          "
        >
          <span>Total</span>
          <span>R$ 330</span>
        </div>
      </div>

      <div className="mt-6">
        <Button>Reservar</Button>
      </div>
    </div>
  );
}
