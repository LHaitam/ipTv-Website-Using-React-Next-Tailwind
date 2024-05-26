import Image from "next/image";
import { subscriptionPlans } from "../constants/index";

const Pricing = () => {
    return (
        <>
            <section id="Pricing" className="flex-col  overflow-hidden  py-24">

                <div className=" text-center relative flex items-center justify-center h-full">
                <h2 className="bold-40 lg:bold-64">Choisissez votre Plan</h2>
                </div>
                <div className="text-center flex items-center justify-center">
                        <p className="regular-16 mt-6 mb-6 xl:max-w-[520px]">
                            CRISTALE IPTV vous propose ses différentes abonnements que vous pouvez utiliser sur toutes les applications et différents appareils tels que Smart TV, Android Box, Fire stick, smartphone, tablette, appareil Mag, appareil enigma2, récepteur satellite intelligent, ou même sur votre ordinateur portable avec VLC Player.
                        </p>
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
                                <li className="grey">
                                    <a href={plan.signUpLink} className="button">
                                        Inscrivez-vous
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Pricing;
