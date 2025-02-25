import { Metadata } from "next";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import AboutUs from "@/components/AboutUs";
import Designing from "@/components/Designing";
import dynamic from "next/dynamic";
import AnimatedCardCarousel from "@/components/TestCard";
import { Hero } from "@/components/Hero";
import ThemeAfricaSummit from "@/components/ThemeAfricaSummit/ThemeAfricaSummit";
import HeroBanner from "@/components/HeroBanner";
import InfoAfricaItSummit from "../features/Information";
import Mission from "../features/Mission";
import Partnership from "../features/partnership";

export const metadata: Metadata = {
  title: "Africa It Summit",
};
const ParticleAnimation = dynamic(
  () => import("../../components/Particles/index"),
  {
    ssr: false, // This is crucial for client-side rendering
  },
);
export default function Home() {
  return (
    <main>
      <Hero />
      {/* <ProfessionalDesign/> */}
      {/* Explication Africa IT Summit */}
      <ParticleAnimation>
        <AboutUs />
        <ThemeAfricaSummit />
        {/* <Designing /> */}
        {/* <Blog /> */}
        {/* <FeaturesTab /> */}
        {/* <Brands /> */}
        {/* <Feature /> */}
        {/* <About /> */}
        {/* <FAQ /> */}
        {/* <FunFact /> */}
        {/* <Integration /> */}
        {/* <CTA /> */}

        {/* <Testimonial /> */}
        {/* <Pricing /> */}
        <Mission />
        {/* <Partnership /> */}
        <InfoAfricaItSummit />
        <Contact />
      </ParticleAnimation>
    </main>
  );
}
