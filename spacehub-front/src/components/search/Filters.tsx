export default function Filters() {
  return (
    <div
      className="
        border
        rounded-xl
        p-5
      "
    >
      <h2
        className="
          font-semibold
          text-lg
        "
      >
        Filtros
      </h2>

      <div className="mt-6 space-y-4">
        <label className="flex gap-2">
          <input type="checkbox" />
          Wi-Fi
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Sala de reunião
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Apartamento inteiro
        </label>
      </div>
    </div>
  );
}
