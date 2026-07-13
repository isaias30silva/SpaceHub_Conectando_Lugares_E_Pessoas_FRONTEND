import { Building, Briefcase, Users, Home } from "lucide-react";
import Container from "@/components/ui/Container";

const categories = [
  {
    name: "Apartamento",
    icon: Home,
  },
  {
    name: "Coworking",
    icon: Briefcase,
  },
  {
    name: "Eventos",
    icon: Users,
  },
  {
    name: "Sala",
    icon: Building,
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-bold mb-6">Categorias</h2>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="
          flex
          items-center
          gap-2

          px-4
          py-2

          rounded-full
          border

          hover:bg-slate-100
        "
              >
                <Icon size={18} />

                {category.name}
              </button>
            );
          })}
          ;
        </div>
      </Container>
    </section>
  );
}
