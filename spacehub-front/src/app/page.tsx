import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Categories from "@/components/home/Categories";
import FeaturedSpaces from "@/components/home/FeaturedSpaces";
import HowItWorks from "@/components/home/HowItWorks";
import HostCTA from "@/components/home/HostCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SearchBar />
        <Categories />
        <FeaturedSpaces />
        <HowItWorks />
        <HostCTA />
      </main>

      <Footer />
    </>
  );
}
