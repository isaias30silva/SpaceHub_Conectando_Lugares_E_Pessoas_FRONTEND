import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        bg-slate-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-16
          lg:py-24


          grid
          grid-cols-1
          lg:grid-cols-2

          gap-12

          items-center
        "
      >
        {/* Texto */}

        <div>
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-bold

              leading-tight

              text-slate-900
            "
          >
            Encontre espaços
            <span
              className="
              text-emerald-600
            "
            >
              {" "}
              incríveis
            </span>
            para viver e criar
          </h1>

          <p
            className="
              mt-6

              text-lg

              text-slate-600

              max-w-xl
            "
          >
            Descubra lugares únicos para trabalhar, viajar ou criar experiências
            inesquecíveis.
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

        {/* Imagem */}

        <div
          className="
            relative

            h-[350px]

            sm:h-[450px]

            rounded-3xl

            overflow-hidden

            shadow-xl
          "
        >
          <Image
            src="/images/hero-space.jpg"
            alt="Espaço moderno disponível no SpaceHub"
            fill
            className="
              object-cover
            "
            priority
          />
        </div>
      </div>
    </section>
  );
}
