import SpaceCard from "@/components/spaces/SpaceCard";
import { featuredSpaces } from "@/constants/spaces";
import Container from "@/components/ui/Container";

export default function FeaturedSpaces() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-bold mb-6">Espaços em destaque</h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {featuredSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </Container>
    </section>
  );
}
