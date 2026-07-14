const days = [
  1,2,3,4,5,6,7,
  8,9,10,11,12,13,14,
  15,16,17,18,19,20,21,
  22,23,24,25,26,27,28,
  29,30,31
];


export default function AvailabilityCalendar(){

return (

<div
className="
border
rounded-xl
p-6
"
>

<h2
className="
font-semibold
mb-4
"
>
Julho 2026
</h2>


<div
className="
grid
grid-cols-7
gap-2
"
>

{
days.map(day=>(

<div
key={day}
className="
border
rounded-lg

h-10

flex
items-center
justify-center

cursor-pointer

hover:bg-emerald-50
"
>
{day}

</div>

))
}

</div>


</div>

)

}