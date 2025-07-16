import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SchoolsSection from "@/Pages/HomePage/card";
import SainikSection from "@/Pages/HomePage/GridSection";
import HeroSection from "@/Pages/HomePage/Hero";
import TrustedBySection from "@/Pages/HomePage/logos";
import NationwideFootprint from "@/Pages/HomePage/map";
import Testimonials from "@/Pages/HomePage/testimonial";
import VoicesAndViews from "@/Pages/HomePage/voicenews";
import WhyJoinSainikSchool from "@/Pages/HomePage/WhyJoinSainikSchool";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <main className="w-full ">
        <Navbar/>
        <HeroSection/>
        <SchoolsSection/>
        <NationwideFootprint/>
        {/*  <WhyJoinSainikSchool/> */}
        <SainikSection/>
        <VoicesAndViews/>
        <TrustedBySection/>
        <Testimonials/>
        <Footer/>
      </main>
    </>
  );
}
