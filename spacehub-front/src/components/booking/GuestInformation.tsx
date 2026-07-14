export default function GuestInformation() {
  return (
    <div
      className="
        border
        rounded-xl
        p-6

        shadow-sm
      "
    >
      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Informações do hóspede
      </h2>


      <div
        className="
          mt-6
          space-y-4
        "
      >

        <div>
          <label
            className="
              text-sm
              text-slate-600
            "
          >
            Nome completo
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            className="
              mt-1

              w-full

              border

              rounded-lg

              px-4
              py-3

              outline-none

              focus:ring-2
              focus:ring-emerald-500
            "
          />
        </div>


        <div>
          <label
            className="
              text-sm
              text-slate-600
            "
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Digite seu email"
            className="
              mt-1

              w-full

              border

              rounded-lg

              px-4
              py-3

              outline-none

              focus:ring-2
              focus:ring-emerald-500
            "
          />
        </div>


        <div>
          <label
            className="
              text-sm
              text-slate-600
            "
          >
            Telefone
          </label>

          <input
            type="tel"
            placeholder="(00) 00000-0000"
            className="
              mt-1

              w-full

              border

              rounded-lg

              px-4
              py-3

              outline-none

              focus:ring-2
              focus:ring-emerald-500
            "
          />
        </div>


        <div>
          <label
            className="
              text-sm
              text-slate-600
            "
          >
            Mensagem para o anfitrião
          </label>


          <textarea
            placeholder="Ex: Chegarei após as 18h"
            rows={4}
            className="
              mt-1

              w-full

              border

              rounded-lg

              px-4
              py-3

              outline-none

              focus:ring-2
              focus:ring-emerald-500
            "
          />

        </div>


      </div>

    </div>
  );
}