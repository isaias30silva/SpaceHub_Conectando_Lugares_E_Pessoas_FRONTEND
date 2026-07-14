import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import LoginBanner from "@/components/auth/LoginBanner";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="py-16">
        <Container>
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              items-center
            "
          >
            <LoginBanner />

            <RegisterForm />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}