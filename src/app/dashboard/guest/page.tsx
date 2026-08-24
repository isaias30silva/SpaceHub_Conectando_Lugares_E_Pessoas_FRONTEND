import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

import GuestHeader from "@/components/guest-dashboard/GuestHeader";
import GuestStats from "@/components/guest-dashboard/GuestStats";
import UpcomingBookings from "@/components/guest-dashboard/UpcomingBookings";
import BookingHistory from "@/components/guest-dashboard/BookingHistory";
import GuestProfile from "@/components/guest-dashboard/GuestProfile";

export default function GuestDashboardPage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <GuestHeader />

          <GuestStats />

          <UpcomingBookings />

          <BookingHistory />

          <GuestProfile />
        </Container>
      </main>

      <Footer />
    </>
  );
}
