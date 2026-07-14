import Button from "@/components/ui/Button";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <AuthCard>
      <h2
        className="
          text-3xl
          font-bold
        "
      >
        Criar Conta
      </h2>

      <p
        className="
          mt-2
          text-slate-600
        "
      >
        Cadastre-se para anunciar ou reservar espaços.
      </p>

      <form
        className="
          mt-8
          space-y-4
        "
      >
        <AuthInput type="text" placeholder="Nome completo" />

        <AuthInput type="email" placeholder="E-mail" />

        <AuthInput type="password" placeholder="Senha" />

        <AuthInput type="password" placeholder="Confirmar senha" />

        <div className="space-y-3">
          <label
            className="
      block
      text-sm
      font-medium
    "
          >
            Tipo de conta
          </label>

          <div
            className="
      grid
      grid-cols-2
      gap-4
    "
          >
            <label
              className="
        border
        rounded-lg
        p-4
        cursor-pointer
      "
            >
              <input type="radio" name="role" value="guest" />

              <span className="ml-2">Hóspede</span>
            </label>

            <label
              className="
        border
        rounded-lg
        p-4
        cursor-pointer
      "
            >
              <input type="radio" name="role" value="host" />

              <span className="ml-2">Anfitrião</span>
            </label>
          </div>
        </div>

        <Button>Criar Conta</Button>

        <div
          className="
    text-center
    text-sm
  "
        >
          Já possui conta?
          <Link
            href="/login"
            className="
      ml-1
      text-emerald-600
    "
          >
            Entrar
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}
