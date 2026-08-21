import Button from "@/components/ui/Button";

import FeaturesSelector from "./FeaturesSelector";
import PhotoUpload from "./PhotoUpload";
import LocationInput from "./LocationInput";

export default function SpaceForm() {
  return (
    <section
      className="
        max-w-3xl
        mx-auto
      "
    >
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        Cadastrar Espaço
      </h1>

      <p
        className="
          text-slate-600
          mt-2
          mb-8
        "
      >
        Adicione um novo espaço ao SpaceHub.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-2">Título</label>

          <input
            type="text"
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <div>
          <label className="block mb-2">Descrição</label>

          <textarea
            rows={5}
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <LocationInput />

        <div>
          <label className="block mb-2">Preço por noite</label>

          <input
            type="number"
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <FeaturesSelector />

        <PhotoUpload />

        <Button>Cadastrar Espaço</Button>
      </form>
    </section>
  );
}
