import React from "react";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Index from "./components/Index";
import MapReview from "./components/MapReview";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Index />
      <Services />
      <Features />
      <Team />
      <Testimonials />
      <FAQs />
      <Contact />
      <MapReview />
      <Footer />
    </div>
  );
}
