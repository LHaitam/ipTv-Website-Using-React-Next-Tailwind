'use client';
import React from 'react';
var $ = require('jquery');
import Image from 'next/image';


if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
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
            items: 4 // Sur les écrans de 640px et plus, affiche 4 éléments
        }
    }
};

export default function Slider() {
    return (
        <>
            <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 pb-[100px]">
                <div className='relative flex items-center justify-center h-full'>
                    <div>
                        <Image src="/diamond.svg" alt="diamond" width={50} height={50} />
                        <h2 className="bold-40 lg:bold-64">Customers Reviews</h2>
                    </div>
                </div>

            </section>
            <div >
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                        <Image
                            src="/review1.webp"
                            alt="review1"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="item">
                        <Image
                            src="/review2.webp"
                            alt="review2"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="item">
                        <Image
                            src="/review3.webp"
                            alt="review3"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="item">
                        <Image
                            src="/review4.webp"
                            alt="review4"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="item">
                        <Image
                            src="/review5.webp"
                            alt="review5"
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="item">
                        <Image
                            src="/review6.webp"
                            alt="review6"
                            width={200}
                            height={300}
                        />
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}
