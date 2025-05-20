import Image from 'next/image'

const Contact = () => {
    return (
        <section id="Contact" className="support bg-green-90 text-white py-10 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4">
                <div className="support-text md:w-1/2">
                    <h2 className="flex items-center bold-20 lg:bold-32">
                        <Image src="/whatsapp.svg" alt="phones" width={50} height={50} loading="lazy"/>
                        <span className="ml-2">Support en Ligne</span>
                    </h2>
                    <p className="mt-2">Vous avez encore une question ? Envoyez un message</p>
                </div>
                <a href="https://wa.me/+212649111213" className="support-btn py-3 px-6 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold text-lg transition duration-300 ease-in-out inline-block mt-4 md:mt-0 md:ml-4">
                    WhatsApp
                </a>
            </div>
        </section>
    );
};

export default Contact;
