export default function Filters() {
  return (
    <div
      className="
        border
        rounded-xl
        p-5
        space-y-6
      "
    >
      <div>
        <h2 className="font-semibold text-lg">Filtros</h2>
      </div>

      {/* Preço */}

      <div>
        <h3 className="font-medium mb-3">Preço por noite</h3>

        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Mínimo"
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
            placeholder="Máximo"
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          />
        </div>
      </div>

      {/* Tipo */}

      <div>
        <h3 className="font-medium mb-3">Tipo de espaço</h3>

        <div className="space-y-3">
          {["Apartamento", "Coworking", "Sala de reunião"].map((item) => (
            <label key={item} className="flex gap-2">
              <input type="checkbox" />

              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Comodidades */}

      <div>
        <h3 className="font-medium mb-3">Comodidades</h3>

        <div className="space-y-3">
          {["Wi-Fi", "Projetor", "Ar condicionado"].map((item) => (
            <label key={item} className="flex gap-2">
              <input type="checkbox" />

              {item}
            </label>
          ))}
        </div>
      </div>

      <button
        className="
          w-full
          border
          rounded-lg
          py-2
          hover:bg-slate-100
        "
      >
        Limpar filtros
      </button>
    </div>
  );
}
