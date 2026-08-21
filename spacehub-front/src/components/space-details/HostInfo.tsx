export default function HostInfo() {
  return (
    <section className="mt-10">
      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Anfitrião
      </h2>

      <div
        className="
          mt-4
          border
          rounded-xl
          p-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-14
              w-14
              rounded-full
              bg-slate-300
            "
          />

          <div>
            <h3 className="font-semibold">João Silva</h3>

            <p className="text-sm text-slate-600">Anfitrião desde 2024</p>
          </div>
        </div>

        <div
          className="
            mt-5
            space-y-2
            text-sm
            text-slate-600
          "
        >
          <p>✔ Responde em menos de 1 hora</p>
          <p>✔ 25 reservas concluídas</p>
          <p>✔ Avaliação média 4.9</p>
        </div>
      </div>
    </section>
  );
}
