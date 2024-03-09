// BackToTopButton.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler jusqu'en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Fonction pour détecter le défilement de la fenêtre
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Ajoute un écouteur d'événement pour le défilement de la fenêtre
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-md hover:bg-purple-800 transition-colors duration-300"
          onClick={scrollToTop}
        >
          <Image src="/arrow-up.svg" alt="Back to top" width={24} height={24} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
