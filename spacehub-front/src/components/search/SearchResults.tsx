import SpaceCard from "@/components/spaces/SpaceCard";

export default function SearchResults() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2

        gap-6
      "
    >
      <SpaceCard
        space={{
          id: 1,
          title: "Sala moderna",
          description: "Espaço confortável próximo ao centro.",
          location: "São Paulo",
          pricePerNight: 150,
          rating: 4.8,
          image: "/images/space-1.jpg",
        }}
      />

      <SpaceCard
        space={{
          id: 2,
          title: "Apartamento confortável",
          description: "Espaço confortável próximo ao centro.",
          location: "Campinas",
          pricePerNight: 220,
          rating: 4.8,
          image: "/images/space-1.jpg",
        }}
      />
    </div>
  );
}
