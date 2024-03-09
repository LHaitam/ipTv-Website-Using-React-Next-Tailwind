"use client";
import React, { useEffect } from 'react';
import About from "@/components/About";
import Channels from "@/components/Channels";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Films from "@/components/Films";
import GetTrial from "@/components/GetTrial";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Series from "@/components/Series";

const Home = () => {
  useEffect(() => {
    const handleTouchStart = () => {
      // Aucune logique spécifique nécessaire pour les événements tactiles
    };

    const handleWheelEvent = () => {
      // Aucune logique spécifique nécessaire pour les événements de la molette
    };

    // Ajoutez cette ligne pour rendre l'écouteur d'événements tactile passif
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Ajoutez cette ligne pour rendre l'écouteur d'événements de la molette passif
    document.addEventListener('wheel', handleWheelEvent, { passive: true });

    return () => {
      // Nettoyez les écouteurs d'événements lors du démontage du composant
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('wheel', handleWheelEvent);
    };
  }, []);

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
  );
};

export default Home;
