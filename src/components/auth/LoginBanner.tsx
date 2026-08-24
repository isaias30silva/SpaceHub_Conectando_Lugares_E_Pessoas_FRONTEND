export default function LoginBanner() {
  return (
    <section
      className="
        hidden
        lg:flex

        flex-col
        justify-center

        rounded-2xl

        bg-emerald-600

        p-10

        text-white
      "
    >
      <h1
        className="
          text-4xl
          font-bold
        "
      >
        Bem-vindo ao SpaceHub
      </h1>

      <p
        className="
          mt-6
          text-lg
        "
      >
        Encontre espaços incríveis para trabalhar, viajar ou criar experiências
        únicas.
      </p>
    </section>
  );
}
