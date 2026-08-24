export default function SpaceGallery() {
  return (
    <section
      className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-3
      "
    >
      <div
        className="
          md:col-span-2
          h-[400px]
          rounded-xl
          bg-slate-300
        "
      />

      <div className="space-y-3">
        <div className="h-[193px] rounded-xl bg-slate-200" />
        <div className="h-[193px] rounded-xl bg-slate-200" />
      </div>

      <div className="space-y-3">
        <div className="h-[193px] rounded-xl bg-slate-200" />
        <div className="h-[193px] rounded-xl bg-slate-200" />
      </div>
    </section>
  );
}