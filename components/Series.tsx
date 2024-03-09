import Image from 'next/image';
import { seriesImages } from '../constants/index'; 

const Series = () => {
  // Index pour parcourir le tableau
  let index = 0;
  
  return (
    <div className="slider-container">
      <div className='series'>
        {/* Utilisation d'une boucle pour générer les images de manière dynamique */}
        {Array.from({ length: 100 }).map((_, i) => {
          const imageIndex = index % seriesImages.length;
          index++; // Incrémentation de l'index
          return <Image key={i} src={`/${seriesImages[imageIndex]}`} alt="slider-img" width={200} height={300} />;
        })}
      </div>
    </div>
  )
}

export default Series;
