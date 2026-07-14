export default function LocationInput() {
  return (
    <div>
      <label className="block mb-2">Localização</label>

      <input
        type="text"
        placeholder="Cidade, Estado"
        className="
          w-full
          border
          rounded-lg
          px-4
          py-3
        "
      />
    </div>
  );
}
