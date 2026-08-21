import { MapPin, Star } from "lucide-react";
import Image from "next/image";

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
overflow-hidden
shadow-sm
hover:shadow-md
transition
"
    >
      <div className="relative h-40">
        {space.imageUrl ? (
          <Image
            src={space.imageUrl}
            alt={space.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full bg-slate-200" />
        )}
      </div>

      <div className="p-4">
        <h3
          className="
font-semibold
text-lg
"
        >
          {space.title}
        </h3>

        <div
          className="
flex
items-center
gap-2
text-sm
text-slate-600
mt-2
"
        >
          <MapPin size={16} />

          {space.location}
        </div>

        <div
          className="
flex
justify-between
mt-4
"
        >
          <span>R$ {space.pricePerNight}/noite</span>

          <div
            className="
flex
items-center
gap-1
"
          >
            <Star size={16} className="fill-current" />

            {space.rating ?? "5.0"}
          </div>
        </div>
      </div>
    </article>
  );
}
