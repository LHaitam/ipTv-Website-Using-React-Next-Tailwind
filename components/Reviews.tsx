'use client';
import React from 'react';
var $ = require('jquery');
import Image from 'next/image';
import "../jquery.d.ts"


if (typeof window !== 'undefined') {
    window['$'] = window['jQuery'] = require('jquery');
}

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const options = {
    loop: true,
    margin: 20,
    items: 1,
    autoplay: true,
    responsive: { // Configuration pour rendre le carrousel réactif
        0: {
            items: 1 // Sur les écrans de moins de 640px, affiche 1 élément
        },
        640: {
            items: 5 // Sur les écrans de 640px et plus, affiche 4 éléments
        }
    }
};

export default function Slider() {
    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 pb-[100px]">
                <div className='relative flex items-center justify-center h-full'>
                    <div>
                        <h2 className="bold-40 lg:bold-64">Avis des Clients</h2>
                    </div>
                </div>
            </section>
            <div>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review1.webp"
                            alt="review1"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review2.webp"
                            alt="review2"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review3.webp"
                            alt="review3"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review4.webp"
                            alt="review4"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review5.webp"
                            alt="review5"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                    <div className="item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/review6.webp"
                            alt="review6"
                            width={100}
                            height={200}
                            loading="lazy"
                            style={{ height: '80%', width: 'auto' }} // Ajouter ces styles
                        />
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}
