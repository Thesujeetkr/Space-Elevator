import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import AboutHome from "../components/AboutHome";
import OurSolution from "../components/OurSolution";
import BenefitsHome from "../components/BenefitsHome";
import FAQ from "../components/FaqHome";
import BrochureSection from "../components/BrochureHome";
import TestimonialSlider from "../components/TestimonialSection";
import VideoSection from "../components/VideoSection";
import CertificationSection from "../components/CertificationSection";
import ClientSection from "../components/ClientSection";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutHome/>
      <ProductSection />
      <OurSolution/> 
      <BenefitsHome/>
      <ClientSection/>
      <CertificationSection/>
      <TestimonialSlider/>
      <VideoSection/>
      <BrochureSection/>
      <FAQ/>
    </>
  );
};

export default Home;
