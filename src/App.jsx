import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import InstagramSection from "./components/InstagramSection";
import Delivery from "./components/Delivery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Benefits />
        <Reviews />
        <InstagramSection />
        <Delivery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}