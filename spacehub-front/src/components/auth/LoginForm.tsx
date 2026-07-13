import Button from "@/components/ui/Button";

export default function LoginForm() {
  return (
    <section
      className="
        max-w-md
        w-full
        mx-auto
      "
    >
      <h2
        className="
          text-3xl
          font-bold
        "
      >
        Entrar
      </h2>

      <p
        className="
          mt-2
          text-slate-600
        "
      >
        Acesse sua conta para continuar.
      </p>

      <form
        className="
          mt-8
          space-y-4
        "
      >
        <input
          type="email"
          placeholder="E-mail"
          className="
            w-full
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <input
          type="password"
          placeholder="Senha"
          className="
            w-full
            border
            rounded-lg
            px-4
            py-3
          "
        />

        <div
          className="
    flex
    justify-between

    text-sm
  "
        >
          <a href="#" className="text-emerald-600">
            Esqueci minha senha
          </a>

          <a href="/register" className="text-emerald-600">
            Criar conta
          </a>
        </div>

        <Button>Entrar</Button>
      </form>
    </section>
  );
}
