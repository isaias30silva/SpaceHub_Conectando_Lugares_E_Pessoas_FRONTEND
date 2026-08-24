import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import SpaceGallery from "@/components/space-details/SpaceGallery";
import SpaceInfo from "@/components/space-details/SpaceInfo";
import Amenities from "@/components/space-details/Amenities";
import HostInfo from "@/components/space-details/HostInfo";
import ReservationCard from "@/components/space-details/ReservationCard";

export default function SpaceDetailsPage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <SpaceGallery />

          <div
            className="
              mt-8

              grid
              grid-cols-1
              lg:grid-cols-3

              gap-10
            "
          >
            <section className="lg:col-span-2">
              <SpaceInfo />
              <Amenities />
              <HostInfo />
            </section>

            <aside>
              <ReservationCard />
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}