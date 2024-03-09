'use client';
import React, { useEffect } from "react";
import Image from 'next/image';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  useEffect(() => {
    const handleAccordionClick = (event) => {
      event.currentTarget.classList.toggle("active");
      const panel = event.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };

    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleAccordionClick);
    }

    return () => {
      // Nettoyer les écouteurs d'événements lors du démontage du composant
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleAccordionClick);
      }
    };
  }, []); // Exécuter l'effet une seule fois après le rendu initial

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden py-24 pb-[100px]">
      <div className='relative flex items-center justify-center h-full'>
        <div>
          <Image src="/diamond.svg" alt="diamond" width={50} height={50} />
          <h2 className="bold-40 lg:bold-64 text-center pb-[60px] pt-0 mt-0">Frequently Asked Questions (FAQ)</h2>
        </div>
      </div>
      <button className="accordion">Available payment methods?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">• PayPal</p>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">• Credit card</p>
      </div>

      <button className="accordion">Which devices can be used for IPTV?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">
          Our IPTV services are accessible via all smart TV devices (Samsung, Sony, LG...), all Android
          devices (phones), Apple TV, iPhone, Google Chromecast, MAG box in the STB emulator app, and
          FireStick.
        </p>
      </div>

      <button className="accordion">Recommended internet speed?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">
          If your download speed is not less than 30 Mbps, then everything will work smoothly in the highest
          quality. If you are not sure, ask for a 1-day trial to test the quality first.
        </p>
      </div>

      <button className="accordion">Which countries are present?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">
          Netherlands Belgium France UK Germany Switzerland Austria Poland Spain Malta Portugal Italy USA Canada
          Australia New Zealand Arabic India Pakistan Iran Turkey Azerbaycan Kurdistan Africa Afghanistan Armenia
          Exyu Slovenia Albania Greece Latino Brazil Caribbean Suriname Sweden Denmark Norway Finland Czech
          Bulgaria Romania Hungary Russia Georgia/Kazakh Ukraine Lithuania Latvia Estonia China/HK Malaysia
          Philippines Indonesia Korea Thailand Taiwan Vietnam
        </p>
      </div>

      <button className="accordion">How many connections at once?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">
          You may install your account on multiple devices, but keep in mind that it works on 1 at a time.
        </p>
      </div>

      <button className="accordion">Recommended internet speed?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[10px] ">
          Watch Stream Killer offers you a 24h free trial. With this you can watch all the channels available on our IPTV packages, adult (excl. on demand) channels movies and series.
        </p>
      </div>
    </section>
  );
};

export default Faq;
