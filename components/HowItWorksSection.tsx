import { STEPS } from '@/constants'
import Image from 'next/image'

const HowItWorksSection = () => {
  return (
    <section id='HowDoesItWork' className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat  pb-[0px]">
      <div className='relative flex items-center justify-center h-full'>
        <div>
          <h2 className="text-center bold-40 lg:bold-64">Comment ça Fonctionne ?</h2>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
      <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-20">
            {STEPS.map((feature) => (
                <StepItem 
                    key={feature.title}
                    title={feature.title} 
                    icon={feature.icon}
                    description={feature.description}
                />
            ))}
        </ul>
      </div>
    </section>
  )
}

type StepItem = {
  title: string;
  icon: string;
  description: string;
}

const StepItem = ({ title, icon, description }: StepItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-5">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} loading="lazy"/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-black lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default HowItWorksSection
