import Button from "@/components/ui/Button";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  return (
    <AuthCard>
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
        <AuthInput type="email" placeholder="E-mail" />

        <AuthInput type="password" placeholder="Senha" />

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
    </AuthCard>
  );
}
