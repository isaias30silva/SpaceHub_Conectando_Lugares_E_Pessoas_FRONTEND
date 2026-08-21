export default function CalendarLegend() {
  return (
    <div
      className="
mt-6
flex
flex-wrap
gap-6
text-sm
"
    >
      <div>
        <span
          className="
inline-block
h-3
w-3
bg-emerald-600
rounded-full
mr-2
"
        />
        Selecionado
      </div>

      <div>
        <span
          className="
inline-block
h-3
w-3
bg-emerald-100
rounded-full
mr-2
"
        />
        Período escolhido
      </div>

      <div>
        <span
          className="
inline-block
h-3
w-3
bg-slate-300
rounded-full
mr-2
"
        />
        Indisponível
      </div>
    </div>
  );
}
