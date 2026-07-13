export default function Amenities() {
  const amenities = ["Wi-Fi", "Projetor", "Ar condicionado", "Estacionamento"];

  return (
    <section className="mt-10">
      <h2 className="font-semibold text-xl">Comodidades</h2>

      <div
        className="
          grid
          grid-cols-2
          gap-4
          mt-4
        "
      >
        {amenities.map((item) => (
          <div
            key={item}
            className="
              border
              rounded-lg
              p-3
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
