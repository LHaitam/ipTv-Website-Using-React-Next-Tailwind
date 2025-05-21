'use client'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const whatsapp = () => {
    return (
        <WhatsAppWidget
            phoneNo="212649111213"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Salut l'équipe, j'ai besoin d'aide !"
            iconSize="55"
            iconColor="white"
            iconBgColor="#73409B"
            headerIcon="/logo.webp"
            headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="#F1F3F5"
            headerTitle="CRISTALE IPTV"
            headerCaption="Online"
            bodyBgColor="#EEEAE3"
            chatPersonName="Support"
            chatMessage={<>Salut ! 👋 <br /><br />Comment puis-je vous aider aujourd'hui ?</>}
            footerBgColor="#F1F3F5"
            placeholder="Type a message.."
            btnBgColor="#075e54"
            btnTxt="Start Chat"
            btnTxtColor="white"
        />
    );
};

export default whatsapp;
