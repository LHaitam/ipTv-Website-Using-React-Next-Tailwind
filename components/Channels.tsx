import Image from 'next/image';
import { channelsImages } from '../constants/index';

let index = 0;

const Channels = () => {
  return (
    <div className="slider-container">
      <div className='channels flex justify-center items-center h-full'>
        {/* Utilisation d'une boucle while pour parcourir le tableau de manière infinie */}
        {Array.from({ length: 100 }).map((_, i) => {
          const imageIndex = index % channelsImages.length;
          index++; // Incrémentation de l'index
          return <Image key={i} src={`/${channelsImages[imageIndex]}`} alt="slider-img" width={100} height={100} />;
        })}
      </div>
    </div>
  )
}

export default Channels
