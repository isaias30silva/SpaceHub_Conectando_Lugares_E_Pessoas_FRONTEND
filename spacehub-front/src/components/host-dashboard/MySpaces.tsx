const spaces = [
  {
    id: 1,
    title: "Coworking Paulista",
  },
  {
    id: 2,
    title: "Loft Centro",
  },
];

export default function MySpaces() {
  return (
    <section className="mb-10">
      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Meus Espaços
      </h2>

      <div className="space-y-4">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="
              border
              rounded-xl
              p-4
            "
          >
            {space.title}
          </div>
        ))}
      </div>
    </section>
  );
}
