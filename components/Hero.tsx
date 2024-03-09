import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pt-32 pb-32 md:gap-28 lg:py-20 xl:flex-row relative">
        <div className="hero-map" />

        <video autoPlay loop muted playsInline className="vid absolute inset-0 object-cover w-full h-full">
          <source src="/bgv.mp4" type="video/mp4" />
          <source src="/bgv.webm" type="video/webm" />
          {/* Ajoutez ici des sources supplémentaires pour la compatibilité avec d'autres navigateurs, si nécessaire */}
        </video>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 text-center">
          <Image
            src="/diamond.svg"
            alt="diamond"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-52 lg:bold-88 text-white">All-In-One Premium IPTV Service</h1>
          <p className="regular-16 mt-6 text-white xl:max-w-[520px] mx-auto">
            Enjoy your time with excellent image quality up to 4K, on any device, anytime and anywhere, with over +15,000 channels, +50,000 VOD and uptime 100%
          </p>

          <div className="my-11 flex flex-wrap gap-5 items-center justify-center text-white">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70 text-white">
              +30k
              <span className="regular-16 lg:regular-20 ml-1 v">Happy Customer</span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row justify-center items-center">
            <Link href="/#GetTrial">
              <Button
                type="button"
                title="Free Trial"
                variant="btn_green"
              />
            </Link>
            <Link href="/#HowDoesItWork">
              <Button
                type="button"
                title="How does it work ?"
                variant="btn_white_text"
              />
            </Link>
          </div>

        </div>

      </section>
      <div className="shadow"></div>
    </>
  );
}

export default Hero;
