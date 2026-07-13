import { Space } from "@/types/space";

interface SpaceCardProps {
  space: Space;
}

export default function SpaceCard({ space }: SpaceCardProps) {
  return (
    <article
      className="
        border
        rounded-xl
        p-4
        shadow-sm
      "
    >
      <h3 className="font-semibold">{space.title}</h3>

      <p className="text-sm text-slate-600">{space.location}</p>

      <p className="mt-2 font-medium">R$ {space.pricePerNight}/noite</p>
    </article>
  );
}
