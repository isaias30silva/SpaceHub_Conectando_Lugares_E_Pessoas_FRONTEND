import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

import SpaceForm from "@/components/create-space/SpaceForm";

export default function CreateSpacePage() {
  return (
    <>
      <Navbar />

      <main className="py-10">
        <Container>
          <SpaceForm />
        </Container>
      </main>

      <Footer />
    </>
  );
}