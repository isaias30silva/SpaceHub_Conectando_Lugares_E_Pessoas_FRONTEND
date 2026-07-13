import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        bg-slate-50
        mt-20
      "
    >
      <Container>
        <div
          className="
            py-10

            flex
            flex-col
            md:flex-row

            justify-between

            gap-6
          "
        >
          <div>
            <h3 className="font-bold text-xl">
              SpaceHub
            </h3>

            <p className="text-slate-600 mt-2">
              Conectando lugares e pessoas.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            <a href="#">
              Sobre
            </a>

            <a href="#">
              Contato
            </a>

            <a href="#">
              Política de Privacidade
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}