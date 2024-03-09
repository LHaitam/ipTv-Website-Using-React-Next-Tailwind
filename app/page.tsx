import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import Series from "@/components/Series";
import About from "@/components/About";
import GetTrial from "@/components/GetTrial";
import HowItWorksSection from "@/components/HowItWorksSection";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Channels from "@/components/Channels";
import Faq from "@/components/Faq";





export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Films />
      <Series />
      <Channels />
      <Features />
      <GetTrial />
      <Pricing />
      <HowItWorksSection />
      <Faq />
      <Contact />
      <Reviews />
    </>
  )
}
