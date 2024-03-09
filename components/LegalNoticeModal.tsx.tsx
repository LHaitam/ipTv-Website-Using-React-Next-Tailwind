import React from 'react';

interface LegalNoticeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-lg max-w-lg">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                    X
                </button>
                <h2 className="text-xl font-semibold mb-4">Legal Information</h2>
                {/* Legal notice content */}
                <p>The Owner is : CRISTALE IPTV</p>
                <p>Owner's postal address : Casablanca</p>

                <p>The Site Creator is : <a href="https://www.linkedin.com/in/haitam-lourhmi-a957481b0/" target="_blank"> LOURHMI Haitam</a></p>

                <p>The Publication Manager is : CRISTALE IPTV</p>
                <p>Contact the Publication Manager : <a href="mailto:contact@cristaleiptv.com">contact@cristaleiptv.com</a></p>

                <p>The Webmaster is : <a href="https://www.linkedin.com/in/haitam-lourhmi-a957481b0/" target="_blank"> LOURHMI Haitam</a></p>
                <p>Contact the Webmaster : <a href="mailto:lourhmihaitam@outlook.fr">lourhmihaitam@outlook.fr</a></p>

                <p>The website is hosted by : <a href="https://www.linkedin.com/in/haitam-lourhmi-a957481b0/" target="_blank">Hostinger.fr</a></p>

                <h2>Presentation and Principle:</h2>
                <p>The website www.cristaleiptv.com provides a range of services, as is, to users. It is specified that users must remain courteous and act in good faith towards other users and the webmaster of the website www.cristaleiptv.com. The website www.cristaleiptv.com is regularly updated by our editors.</p>

                <p>The website www.cristaleiptv.com provides the most accurate information possible about IPTV products (IPTV subscriptions), but cannot guarantee the accuracy, completeness, and timeliness of the information published on the site, whether it is provided by the website itself or by third-party partners. Consequently, the user acknowledges that they use this information at their sole responsibility.</p>

                <h2>Accessibility:</h2>
                <p>The website www.cristaleiptv.com is generally accessible to users 24/7, except for scheduled or unscheduled interruptions for maintenance or in case of force majeure affecting our web server. In the event of unavailability of the service, www.cristaleiptv.com undertakes to do its utmost to restore access to the service and will make efforts to inform users in advance of the dates and times of the intervention. As it is subject only to an obligation of means, www.cristaleiptv.com cannot be held responsible for any damages, of any nature whatsoever, resulting from the unavailability of the service.</p>

                <h2>Intellectual Property:</h2>
                <p>Younes is the exclusive owner of all intellectual property rights or holds usage rights over all elements accessible on the website, including the structure, texts, images, graphics, logos, icons, sounds, software, etc.</p>
                <p>Any total or partial reproduction of the website www.cristaleiptv.com, representation, modification, publication, adaptation, in whole or in part, of any of these elements, regardless of the means or process used, is prohibited without the prior written authorization of Younes, the owner of the website, at the email address: contact@cristaleiptv.com.</p>

                <h2>Hypertext Links and Cookies:</h2>
                <p>The website www.cristaleiptv.com contains a certain number of hypertext links and affiliate links to other websites (partners, information, etc.) established with the permission of the website owner. However, the Administrator does not have the ability to check the content of all visited websites and therefore declines any responsibility for any potential risks of illicit content.</p>
                <p>The user is informed that during their visits to the website www.cristaleiptv.com, one or more cookies may be automatically installed on their computer through their browsing software. A cookie is a data block that does not allow the user to be identified but records information related to their navigation on the website.</p>

                <h2>Protection of Property and Individuals:</h2>
                <p>No personal information of users of the website www.cristaleiptv.com is published without their knowledge, exchanged, transferred, assigned, or sold on any medium to third parties. The only exception is in the event of the acquisition of the website and its rights, which would allow the owner to transmit the said information to the potential buyer, who would be bound by the same obligation to retain and modify the data regarding users of the website www.cristaleiptv.com.</p>
                {/* Add the rest of the legal notice content here */}
            </div>
        </div>
    );
};

export default LegalNoticeModal;
