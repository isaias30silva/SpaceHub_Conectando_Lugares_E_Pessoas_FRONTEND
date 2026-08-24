import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import BookingHeader from "@/components/booking/BookingHeader";
import BookingSummary from "@/components/booking/BookingSummary";
import PriceBreakdown from "@/components/booking/PriceBreakdown";
import GuestInformation from "@/components/booking/GuestInformation";
import ConfirmBooking from "@/components/booking/ConfirmBooking";

export default function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <BookingHeader />

          <div
            className="
grid
grid-cols-1
lg:grid-cols-3

gap-8
"
          >
            <section
              className="
lg:col-span-2
"
            >
              <BookingSummary />
              <GuestInformation />
              <PriceBreakdown />
              <ConfirmBooking />
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
