export default function SortBar() {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        mb-6
      "
    >
      <h2 className="font-semibold">Espaços encontrados</h2>

      <select
        className="
          border
          rounded-lg
          px-3
          py-2
        "
      >
        <option>Mais relevantes</option>

        <option>Menor preço</option>

        <option>Maior preço</option>
      </select>
    </div>
  );
}
