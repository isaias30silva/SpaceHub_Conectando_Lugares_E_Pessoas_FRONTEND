import { Wifi, Car, Monitor, Snowflake } from "lucide-react";

export default function Amenities() {
  const amenities = [
    {
      icon: Wifi,
      label: "Wi-Fi",
    },
    {
      icon: Monitor,
      label: "Projetor",
    },
    {
      icon: Snowflake,
      label: "Ar condicionado",
    },
    {
      icon: Car,
      label: "Estacionamento",
    },
  ];

  return (
    <section className="mt-10">
      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Comodidades
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mt-5
        "
      >
        {amenities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                border
                rounded-xl
                p-4

                flex
                items-center
                gap-3
              "
            >
              <Icon size={20} />

              {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
