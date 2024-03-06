import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Projects/Project";

export default function Home() {
  return (
    <main className="mx-auto  ">
      <Hero />
      <About />
      <Project />
      <Education />
      <Footer />
    </main>
  );
}
