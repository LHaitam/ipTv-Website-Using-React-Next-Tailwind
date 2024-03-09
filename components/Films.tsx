import Image from 'next/image';
import { filmImages } from '../constants/index';

const Films = () => {
  // Index pour parcourir le tableau
  let index = 0;

  return (
    <div className="slider-container">
      <div className='films'>
        {/* Utilisation d'une boucle while pour parcourir le tableau de manière infinie */}
        {Array.from({ length: 100 }).map((_, i) => {
          const imageIndex = index % filmImages.length;
          index++; // Incrémentation de l'index
          return <Image key={i} src={`/${filmImages[imageIndex]}`} alt="slider-img" width={200} height={300} />;
        })}
      </div>
    </div>
  );
};

export default Films;
