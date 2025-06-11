import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <Programs />
        <Blog />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
