import { MapPin, Star } from "lucide-react";

export default function SpaceInfo() {
  return (
    <section>
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        Coworking Premium Paulista
      </h1>

      <div
        className="
          flex
          gap-4
          mt-3
          text-slate-600
        "
      >
        <span className="flex items-center gap-1">
          <Star size={16} />
          4.9
        </span>

        <span className="flex items-center gap-1">
          <MapPin size={16} />
          São Paulo
        </span>
      </div>

      <p className="mt-6 text-slate-700">
        Espaço moderno para trabalho, reuniões e eventos corporativos.
      </p>
    </section>
  );
}
