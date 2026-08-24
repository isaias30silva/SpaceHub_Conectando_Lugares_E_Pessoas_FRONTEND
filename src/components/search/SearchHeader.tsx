import Container from "@/components/ui/Container";

export default function SearchHeader() {
  return (
    <section
      className="
        bg-slate-50
        py-10
      "
    >
      <Container>
        <h1
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          Encontre o espaço ideal
        </h1>

        <p
          className="
            mt-2
            text-slate-600
          "
        >
          Busque espaços para trabalhar, viajar ou realizar eventos.
        </p>
      </Container>
    </section>
  );
}
