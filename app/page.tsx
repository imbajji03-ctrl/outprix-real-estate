// app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurProcess from "@/components/home/OurProcess";
import RealEstateFocus from "@/components/home/RealEstateFocus";
import FounderSection from "@/components/home/FounderSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outprix Digital | Jaipur's #1 Real Estate Digital Marketing Agency",
  description:
    "Outprix Digital is Jaipur's #1 real estate digital marketing agency. Meta Ads, Google Ads, SEO & Social Media — exclusively for real estate builders, developers & brands.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <OurProcess />
        <RealEstateFocus />
        <FounderSection />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
