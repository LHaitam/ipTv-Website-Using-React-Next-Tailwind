// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Acceuil' },
  { href: '/#About', key: 'about', label: 'A propos' },
  { href: '/#Pricing', key: 'pricing', label: 'Tarification' },
  { href: '/#FAQ', key: 'faq ', label: 'FAQ ' },
  { href: '/#Contact', key: 'contact_us', label: 'Contact' },
];


// FEATURES SECTION
export const FEATURES = [
  {
    title: '+15 000 chaînes',
    icon: '/tv.svg',
    variant: 'green',
    description:
      'Avec plus de 15 000 chaînes, nous garantissons que vous trouverez vos émissions préférées !',
  },
  {
    title: 'Remboursement sous 24 heures',
    icon: '/cashback.svg',
    variant: 'green',
    description:
    "Vous avez la possibilité d'annuler votre abonnement IPTV dans les 24 heures suivant votre achat si vous n'êtes pas satisfait. Vous recevrez alors un remboursement complet de notre part."  },
  {
    title: 'Tous les appareils',
    icon: '/devices.svg',
    variant: 'green',
    description:
    "Notre IPTV fonctionne sur tous les appareils tels que les Smart TVs, Android, Roku, Formuler, FireStick, MAG, iOS, et tout autre appareil prenant en charge les fichiers M3U ou les portails."  },
  {
    title: 'Haute qualité',
    icon: '/quality.svg',
    variant: 'orange',
    description:
    "Nous proposons toutes les qualités d'image (HD/FHD/4K) pour visionner votre service IPTV partout, quel que soit votre débit réseau."  },
];


//PRICING SECTION

// constants/index.ts
export const subscriptionPlans = [
  {
      title: "1 Mois",
      price: "100 MAD",
      features: [
        "Applications gratuites",
        "Expédition rapide",
        "Multiples appareils",
        "99,9 % de disponibilité",
        "Support technique convivial",
        "Assistance 24/7",
        "Activation instantanée",
        "Satisfaction client",
        "Facile à installer",
        "Netflix",
        "Disney+"      ],
      signUpLink: "https://api.whatsapp.com/send?phone=+212649111213&text= Abonnement de 1 mois !"
  },
  {
      title: "3 Mois",
      price: "150 MAD",
      features: [
        "Applications gratuites",
        "Expédition rapide",
        "Multiples appareils",
        "99,9 % de disponibilité",
        "Support technique convivial",
        "Assistance 24/7",
        "Activation instantanée",
        "Satisfaction client",
        "Facile à installer",
        "Netflix",
        "Disney+"      ],
      signUpLink: "https://api.whatsapp.com/send?phone=+212649111213&text=Abonnement de 3 mois !"
  },
  {
      title: "1 An",
      price: "300 MAD",
      features: [
        "Applications gratuites",
        "Expédition rapide",
        "Multiples appareils",
        "99,9 % de disponibilité",
        "Support technique convivial",
        "Assistance 24/7",
        "Activation instantanée",
        "Satisfaction client",
        "Facile à installer",
        "Netflix",
        "Disney+"      ],
      signUpLink: "https://api.whatsapp.com/send?phone=+212649111213&text=Abonnement de 1 an"
  }
];


// HOW IT WORKS SECTION
export const STEPS = [
  {
    title: '1. Passez votre commande',
    icon: '/order.svg',
    variant: 'green',
    description:
      'Placez votre commande en choisissant la période d abonnement qui vous convient : 1, 3 ou 12 mois.',
  },
  {
    title: '2. Obtenez votre compte',
    icon: '/user.svg',
    variant: 'green',
    description:'Ce processus peut prendre de 15 à 30 minutes. Veuillez vérifier votre boîte de réception ainsi que votre dossier de courriers indésirables. Pour accélérer le processus, veuillez nous contacter via Whatsapp.',
  },
  {
    title: '3. Profitez de votre service IPTV !',
    icon: '/play.svg',
    variant: 'green',
    description:
      'Profitez de tous les chaînes, des films et des séries dès maintenant !',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'En savoir plus',
    links: [
      /* { title: 'Channels List', url: '/#About' }, */
      { title: 'Liste des chaînes', url: 'https://drive.google.com/file/d/1Co4uV8wGGCB2QuTopkBhZ12pnBKW6of0/view', target: '_blank', rel: 'noopener noreferrer' },
      { title: 'Avis légal', url: '/#About' },
      { title: 'Conditions générales', url: '/#About' },
      { title: 'Conditions de vente', url: '/#About' },
    ],
  },
  {
    title: 'Liens',
    links: [
      { title: 'Acceuil', url: '/' },
      { title: 'A propos', url: '/#About' },
      { title: 'Tarification', url: '/#Pricing' },
      { title: 'FAQ', url: '/#FAQ' },
    ],
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Contact',
  links: [
    { label: 'WhatsApp', value: '+212 649-111-213', href: 'https://api.whatsapp.com/send/?phone=%2B15642247620&text&type=phone_number&app_absent=0' },
    { label: 'Email', value: 'contact@cristaleiptv.com', href: 'mailto:contact@cristaleiptv.com' },
  ],
};

export const filmImages = [
  'film1.webp',
  'film2.webp',
  'film3.webp',
  'film4.webp',
  'film5.webp',
  'film6.webp',
  'film7.webp',
  'film8.webp',
  'film9.webp',
  'film10.webp'
];


export const seriesImages = [
  'serie1.webp',
  'serie2.webp',
  'serie3.webp',
  'serie4.webp',
  'serie5.webp',
  'serie6.webp',
  'serie7.webp',
  'serie8.webp',
  'serie9.webp',
  'serie10.webp'
];

export const channelsImages = [
  'channel20.webp',
  'channel1.webp',
  'channel2.webp',
  'channel3.webp',
  'channel4.webp',
  'channel5.webp',
  'channel6.webp',
  'channel7.webp',
  'channel8.webp',
  'channel9.webp',
  'channel10.webp',
  'channel11.webp',
  'channel12.webp',
  'channel13.webp',
  'channel14.webp',
  'channel15.webp',
  'channel16.webp',
  'channel19.webp'
];




export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
  ],
  
};


