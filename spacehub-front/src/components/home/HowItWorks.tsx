import Container from "@/components/ui/Container";

export default function HowItWorks() {
  const steps = [
    "Busque um espaço",
    "Escolha as datas",
    "Finalize sua reserva",
  ];

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <h2 className="text-2xl font-bold mb-10">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="
                p-6
                bg-white
                rounded-xl
                border
              "
            >
              <div className="text-2xl font-bold mb-2">{index + 1}</div>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
