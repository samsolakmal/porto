import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/about/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
