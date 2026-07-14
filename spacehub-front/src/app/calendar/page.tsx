import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import CalendarHeader from "@/components/calendar/CalendarHeader";
import AvailabilityCalendar from "@/components/calendar/AvailabilityCalendar";
import CalendarLegend from "@/components/calendar/CalendarLegend";


export default function CalendarPage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>

          <CalendarHeader />

          <AvailabilityCalendar />

          <CalendarLegend />

        </Container>
      </main>

      <Footer />
    </>
  );
}