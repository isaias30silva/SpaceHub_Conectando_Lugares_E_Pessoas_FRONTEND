import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import LoginForm from "@/components/auth/LoginForm";
import LoginBanner from "@/components/auth/LoginBanner";

export default function LoginPage() {
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

            <LoginForm />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
