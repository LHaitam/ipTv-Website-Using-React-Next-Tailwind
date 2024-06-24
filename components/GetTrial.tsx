import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const GetTrial = () => {
  return (
    <section id='GetTrial' className="flexCenter w-full flex-col pb-[10px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Qu'est-ce que vous attendez ?</h2>
          <p className="regular-16 text-gray-10">Obtenez dès maintenant votre essai gratuit de 24 heures !</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href={"https://api.whatsapp.com/send?phone=+212714303033&text=24H Free Trial !"}>
              <Button
                type="button"
                title="Essai Gratuit"
                variant="btn_white"
                full
                aria-label="Start Free Trial"
              />

            </Link>

          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/devices.webp" alt="phones" width={550} height={870} loading="lazy"/>
        </div>
      </div>
    </section>
  )
}

export default GetTrial
