import Image from 'next/image'
import { subscriptionPlans } from "../constants/index";

const Pricing = () => {
    return (
        <>
            <section id='Pricing' className="flex-col  overflow-hidden  py-24">
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-center">
                        <Image src="/diamond.svg" alt="diamond" width={50} height={50} />
                        <h2 className="bold-40 lg:bold-64">Choose Your Plan</h2>
                        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] ">
                            CRISTALE IPTV offers you its different subscriptions that you can use on all applications and different devices such as Smart TV, Android Box, Fire stick, smartphone, tablet, Mag device, enigma2 device, smart satellite receiver, or even on your laptop with VLC Player.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {subscriptionPlans.map((plan, index) => (
                        <div className="columns" key={index}>
                            <ul className="price">
                                <li className="header">{plan.title}</li>
                                <li className="grey">{plan.price}</li>
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                                <li className="grey"><a href={plan.signUpLink} className="button">Sign Up</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Pricing;

