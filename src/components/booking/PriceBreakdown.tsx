export default function PriceBreakdown() {

  const pricePerNight = 250;

  const nights = 4;

  const serviceFee = 100;


  const subtotal = pricePerNight * nights;

  const total = subtotal + serviceFee;


  return (

    <div
      className="
        border
        rounded-xl
        p-6

        shadow-sm
      "
    >

      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Resumo do pagamento
      </h2>


      <div
        className="
          mt-6
          space-y-4
          text-slate-700
        "
      >

        <div
          className="
            flex
            justify-between
          "
        >

          <span>
            R$ {pricePerNight} x {nights} noites
          </span>


          <span>
            R$ {subtotal}
          </span>

        </div>


        <div
          className="
            flex
            justify-between
          "
        >

          <span>
            Taxa SpaceHub
          </span>


          <span>
            R$ {serviceFee}
          </span>

        </div>


        <hr />


        <div
          className="
            flex
            justify-between

            font-bold

            text-lg
          "
        >

          <span>
            Total
          </span>


          <span>
            R$ {total}
          </span>


        </div>


      </div>


    </div>

  );

}