import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetTrial = () => {
  return (
    <section id='GetTrial' className="flexCenter w-full flex-col pb-[10px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">What Are You Waiting For?</h2>
          <p className="regular-16 text-gray-10">Get Your 24-Hour Free Trial Now!</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Free Trial"
              icon="/gift.svg"
              variant="btn_white"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/devices.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetTrial