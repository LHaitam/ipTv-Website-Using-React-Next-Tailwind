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
    <section id="FAQ" className="flex flex-col items-center justify-center overflow-hidden py-24 pb-[100px]">
      <div className='relative flex items-center justify-center h-full'>
        <div>
          <h2 className="bold-40 lg:bold-64 text-center pb-[60px] pt-0 mt-0">Questions Fréquemment Posées (FAQ)</h2>
        </div>
      </div>
      <button className="accordion">Méthodes de paiement disponibles ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">• PayPal</p>
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">• Carte de crédit</p>
      </div>

      <button className="accordion">Sur quels appareils peut-on utiliser l'IPTV ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">
          Nos services IPTV sont accessibles via tous les appareils Smart TV (Samsung, Sony, LG...), tous les appareils Android (téléphones), Apple TV, iPhone, Google Chromecast, MAG box dans l'application STB emulator et FireStick.
        </p>
      </div>

      <button className="accordion">Vitesse internet recommandée ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">
          Si votre vitesse de téléchargement n'est pas inférieure à 30 Mbps, tout fonctionnera parfaitement en haute qualité. Si vous n'êtes pas sûr, demandez un essai d'une journée pour tester la qualité en premier.
        </p>
      </div>

      <button className="accordion">Quels pays sont disponibles ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">
          Pays-Bas Belgique France Royaume-Uni Allemagne Suisse Autriche Pologne Espagne Malte Portugal Italie États-Unis Canada Australie Nouvelle-Zélande Arabe Inde Pakistan Iran Turquie Azerbaycan Kurdistan Afrique Afghanistan Arménie Exyu Slovénie Albanie Grèce Latino Brésil Caraïbes Suriname Suède Danemark Norvège Finlande République tchèque Bulgarie Roumanie Hongrie Russie Géorgie/Kazakh Ukraine Lituanie Lettonie Estonie Chine/Hong Kong Malaisie Philippines Indonésie Corée Thaïlande Taïwan Vietnam
        </p>
      </div>

      <button className="accordion">Combien de connexions simultanées ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">
          Vous pouvez installer votre compte sur plusieurs appareils, mais gardez à l'esprit qu'il fonctionne sur 1 à la fois.
        </p>
      </div>

      <button className="accordion">Quelle est la vitesse internet recommandée ?</button>
      <div className="panel">
        <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[10px] ">
          Cristale IPTV vous propose un essai gratuit de 24 heures. Avec cela, vous pouvez regarder toutes les chaînes disponibles sur nos forfaits IPTV, les chaînes pour adultes (excl. à la demande) et les films et séries.
        </p>
      </div>
    </section>
  );
};

export default Faq;
