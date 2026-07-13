export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-16
          text-center
        "
      >
        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-slate-900
          "
        >
          Encontre espaços{" "}
          <span className="text-emerald-600">
            incríveis
          </span>
        </h1>

        <p
          className="
            mt-6
            mx-auto
            max-w-2xl
            text-lg
            text-slate-600
          "
        >
          Descubra lugares únicos para trabalhar,
          viajar ou criar experiências.
        </p>

        <button
          className="
            mt-8
            rounded-lg
            bg-emerald-600
            px-8
            py-3
            text-white
            font-semibold
            hover:bg-emerald-700
            transition
          "
        >
          Explorar espaços
        </button>
      </div>
    </section>
  );
}