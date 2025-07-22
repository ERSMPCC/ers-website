import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/main-page/Hero";
import { About } from "@/components/main-page/About";
import { Services } from "@/components/main-page/Services";
import { Contact } from "@/components/main-page/Contact";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
} 