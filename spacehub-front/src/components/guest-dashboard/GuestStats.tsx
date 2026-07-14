import {
  Calendar,
  CheckCircle,
  Building2,
} from "lucide-react";

export default function GuestStats() {
  const stats = [
    {
      title: "Reservas Ativas",
      value: 2,
    },
    {
      title: "Reservas Concluídas",
      value: 12,
    },
    {
      title: "Espaços Visitados",
      value: 8,
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
      {stats.map((item) => (
        <div
          key={item.title}
          className="
            border
            rounded-xl
            p-5
            bg-white
          "
        >
          <p className="text-slate-500">{item.title}</p>

          <h2
            className="
              text-3xl
              font-bold
              mt-2
            "
          >
            {item.value}
          </h2>
        </div>
      ))}
    </section>
  );
}
