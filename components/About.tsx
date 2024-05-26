import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='About' className="flexCenter flex-col">
      <div className="padding-container max-container w-full pt-24 pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Nous sommes là pour vous
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Améliorez votre vie avec l'IPTV.</h2>
          <p className="regular-16 text-black xl:max-w-[520px]">CRISTALE IPTV propose un service IPTV premium dans le monde entier depuis 2014. Nos serveurs mondiaux garantissent une diffusion en continu fluide pour des milliers de clients satisfaits. Profitez d'une télévision illimitée en déplacement avec une compatibilité multi-appareils. Notre bouquet offre une variété de chaînes, comprenant des programmes généraux, sportifs, pour enfants, de divertissement, d'actualités et de cinéma, garantissant un accès facile au contenu le plus récent.</p>
        </div>
      </div>


    </section>
  )
}

export default About
