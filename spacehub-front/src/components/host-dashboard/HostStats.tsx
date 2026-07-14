import { Building2, Calendar, TrendingUp } from "lucide-react";

export default function HostStats() {
  const stats = [
    {
      title: "Espaços",
      value: 5,
      icon: Building2,
    },
    {
      title: "Reservas",
      value: 18,
      icon: Calendar,
    },
    {
      title: "Ocupação",
      value: "82%",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
        mb-10
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              border
              rounded-xl
              p-5
            "
          >
            <Icon size={24} />

            <p className="mt-3">{item.title}</p>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {item.value}
            </h2>
          </div>
        );
      })}
    </section>
  );
}
