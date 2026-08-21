const features = [
  "Wi-Fi",
  "Sala de reunião",
  "Estacionamento",
  "Ar condicionado",
  "Cozinha",
];

export default function FeaturesSelector() {
  return (
    <div>
      <label className="block mb-3">Características</label>

      <div
        className="
          grid
          grid-cols-2
          gap-3
        "
      >
        {features.map((feature) => (
          <label
            key={feature}
            className="
              border
              rounded-lg
              p-3
            "
          >
            <input type="checkbox" className="mr-2" />

            {feature}
          </label>
        ))}
      </div>
    </div>
  );
}
