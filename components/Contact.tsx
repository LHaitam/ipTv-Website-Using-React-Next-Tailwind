import Image from 'next/image'

const Contact = () => {
    return (
        <section id="Contact" className="support bg-green-90 text-white py-10 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4">
                <div className="support-text md:w-1/2">
                    <h2 className="flex items-center bold-20 lg:bold-32">
                        <Image src="/whatsapp.svg" alt="phones" width={50} height={50} />
                        <span className="ml-2">Online Support</span>
                    </h2>
                    <p className="mt-2">You still have a question? Send a message</p>
                </div>
                <a href="https://wa.me/+15642247620" className="support-btn py-3 px-6 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold text-lg transition duration-300 ease-in-out inline-block mt-4 md:mt-0 md:ml-4">
                    WhatsApp us
                </a>
            </div>
        </section>
    );
};

export default Contact;
