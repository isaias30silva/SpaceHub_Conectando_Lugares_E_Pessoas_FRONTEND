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
      "
    >
      <h3 className="text-xl font-bold">
        R$ 150/noite
      </h3>

      <div className="mt-4 space-y-3">
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
      </div>

      <div className="mt-5">
        <Button>
          Reservar
        </Button>
      </div>
    </div>
  );
}