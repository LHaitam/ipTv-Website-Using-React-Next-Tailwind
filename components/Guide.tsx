import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/diamond.svg" alt="diamond" width={50} height={50} loading="lazy"/>
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Enhance life with IPTV</h2>
          <p className="regular-16 text-black xl:max-w-[520px]">CRISTALE IPTV has been providing premium IPTV service worldwide since 2014. Our global servers ensure seamless streaming for thousands of satisfied customers. Enjoy unlimited TV on-the-go with multi-device compatibility. Our bouquet offers diverse channels, including general, sports, kids, entertainment, news, and cinema, ensuring access to the latest content hassle-free.</p>
        </div>
      </div>

      
    </section>
  )
}

export default Guide