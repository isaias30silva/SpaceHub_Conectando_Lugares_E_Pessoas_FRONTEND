export default function SearchBar() {
  return (
    <section
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        -mt-4
      "
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-md
          p-4

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5

          gap-4
        "
      >
        <input
          type="text"
          placeholder="Onde?"
          className="
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <input
          type="date"
          className="
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <input
          type="date"
          className="
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <input
          type="number"
          min="1"
          placeholder="Hóspedes"
          className="
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <button
          className="
            bg-emerald-600
            text-white
            rounded-lg
            px-4
            py-3
            font-semibold
            hover:bg-emerald-700
            transition
          "
        >
          Buscar
        </button>
      </div>
    </section>
  );
}
