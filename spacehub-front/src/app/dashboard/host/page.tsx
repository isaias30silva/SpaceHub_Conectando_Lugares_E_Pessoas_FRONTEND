import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

import HostHeader from "@/components/host-dashboard/HostHeader";
import HostStats from "@/components/host-dashboard/HostStats";
import MySpaces from "@/components/host-dashboard/MySpaces";
import ReceivedBookings from "@/components/host-dashboard/ReceivedBookings";
import HostProfile from "@/components/host-dashboard/HostProfile";

export default function HostDashboardPage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <HostHeader />

          <HostStats />

          <MySpaces />

          <ReceivedBookings />

          <HostProfile />
        </Container>
      </main>

      <Footer />
    </>
  );
}