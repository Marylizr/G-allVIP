export const sharedImages = {
  hero:
    'https://res.cloudinary.com/da6il8qmv/image/upload/v1681051866/ScenicByway_Desktop-1536x863_djnhrh.jpg',
  grandCanyon:
    'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681051865/grandC2_d3rld0.jpg',
  hooverDam:
    'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681136935/hooverD2_ujivo0.jpg',
  sevenMagic:
    'https://res.cloudinary.com/da6il8qmv/image/upload/c_scale,w_370/v1681137177/magicM1_bjfpws.jpg'
};

export const siteContent = {
  en: {
    locale: 'en',
    languageLinks: {
      en: '/',
      es: '/es'
    },
    nav: [
      ['Home', '#home'],
      ['Services', '#services'],
      ['Destinations', '#destinations'],
      ['About Us', '#about'],
      ['Contact', '#contact']
    ],
    labels: {
      sms: '(only sms)',
      requestService: 'Request Service',
      phoneMessage:
        'Hi%2C%20I%20would%20like%20to%20request%20VIP%20transportation%20service.'
    },
    hero: {
      eyebrow: 'Premium travel. Personalized for you.',
      title: ['Your journey,', 'our priority.'],
      aria: 'Your journey, our priority.',
      text:
        'All VIP Services provides exclusive transportation and concierge solutions in the Grand Canyon, Hoover Dam and Seven Magic Mountain.',
      promo: 'Free ride to dispensary, liquor store or Strip club with eligible VIP plans.'
    },
    trust: [
      ['Safe & Reliable', 'Your safety is our priority'],
      ['Professional Drivers', 'Experienced and courteous'],
      ['On Time', 'Punctual, every time'],
      ['VIP Experience', 'Comfort, luxury and care']
    ],
    servicesIntro: {
      eyebrow: 'Our services',
      title: 'Comfort, punctuality and exclusivity',
      text:
        'From private transfers to tailor-made tours, we take care of every detail so you can enjoy without worries.',
      button: 'View all services'
    },
    services: [
      {
        title: 'Private Transfers',
        text: 'Airport, hotel, and point-to-point transportation.'
      },
      {
        title: 'Tours & Excursions',
        text: 'Customized tours to unique destinations.'
      },
      {
        title: 'VIP Concierge Service',
        text: 'Personal assistance for a worry-free experience.'
      },
      {
        title: 'Events & Groups',
        text: 'Solutions for events, conventions, and private groups.'
      }
    ],
    destinationsIntro: {
      eyebrow: 'Top destinations',
      title: 'Discover iconic places in total comfort',
      text: 'We take you to the most impressive destinations with the best experience.',
      button: 'Explore destinations',
      galleryLabel: 'Top destination gallery',
      previousLabel: 'Previous destination',
      nextLabel: 'Next destination'
    },
    destinations: [
      {
        title: 'Grand Canyon',
        text: 'Experience the wonder of one of the 7 natural wonders.',
        image: sharedImages.grandCanyon
      },
      {
        title: 'Hoover Dam',
        text: 'An engineering marvel you cannot miss.',
        image: sharedImages.hooverDam
      },
      {
        title: 'Seven Magic Mountain',
        text: 'A unique and vibrant art installation.',
        image: sharedImages.sevenMagic
      }
    ],
    why: {
      eyebrow: 'Why choose us',
      title: 'We make every journey exceptional',
      reasons: [
        ['Security First', 'Licensed vehicles and professional drivers.'],
        ['Premium Quality', 'Luxury vehicles for a superior comfort experience.'],
        ['100% Personalized', 'Services tailored to your needs and schedule.'],
        ['24/7 Support', 'We are available to assist you at any time.']
      ]
    },
    contact: {
      title: 'Ready to elevate your travel experience?',
      text: 'Contact us today and let us take care of every detail.'
    },
    footer: {
      description:
        'We offer premium transportation and concierge services in the Grand Canyon, Hoover Dam and Seven Magic Mountain.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      destinationsTitle: 'Destinations',
      contactTitle: 'Contact Us',
      smsReservations: 'SMS and WhatsApp reservations',
      location: 'Las Vegas, Nevada USA',
      disclaimer:
        'Disclaimer: All VIP Services provides private transportation and concierge coordination. Tour availability, routes, timing, third-party venues, and complimentary stops may vary by schedule, local conditions, and service eligibility.',
      copyright: '© 2024 All VIP Services. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    }
  },
  es: {
    locale: 'es',
    languageLinks: {
      en: '/',
      es: '/es'
    },
    nav: [
      ['Inicio', '#home'],
      ['Servicios', '#services'],
      ['Destinos', '#destinations'],
      ['Nosotros', '#about'],
      ['Contacto', '#contact']
    ],
    labels: {
      sms: '(solo sms)',
      requestService: 'Solicitar servicio',
      phoneMessage:
        'Hola%2C%20quiero%20solicitar%20informacion%20sobre%20un%20servicio%20VIP%20de%20transporte.'
    },
    hero: {
      eyebrow: 'Viajes premium. Personalizados para ti.',
      title: ['Tu viaje,', 'nuestra prioridad.'],
      aria: 'Tu viaje, nuestra prioridad.',
      text:
        'All VIP Services ofrece transporte exclusivo y soluciones de concierge hacia el Grand Canyon, Hoover Dam y Seven Magic Mountain.',
      promo:
        'Viaje gratis a dispensario, licoreria o Strip club con planes VIP elegibles.'
    },
    trust: [
      ['Seguro y confiable', 'Tu seguridad es nuestra prioridad'],
      ['Choferes profesionales', 'Experiencia y trato cortes'],
      ['Siempre a tiempo', 'Puntualidad en cada viaje'],
      ['Experiencia VIP', 'Comodidad, lujo y cuidado']
    ],
    servicesIntro: {
      eyebrow: 'Nuestros servicios',
      title: 'Comodidad, puntualidad y exclusividad',
      text:
        'Desde traslados privados hasta tours a la medida, cuidamos cada detalle para que disfrutes sin preocupaciones.',
      button: 'Ver servicios'
    },
    services: [
      {
        title: 'Traslados privados',
        text: 'Aeropuerto, hotel y transporte punto a punto.'
      },
      {
        title: 'Tours y excursiones',
        text: 'Tours personalizados a destinos unicos.'
      },
      {
        title: 'Servicio VIP concierge',
        text: 'Asistencia personal para una experiencia sin preocupaciones.'
      },
      {
        title: 'Eventos y grupos',
        text: 'Soluciones para eventos, convenciones y grupos privados.'
      }
    ],
    destinationsIntro: {
      eyebrow: 'Destinos principales',
      title: 'Descubre lugares iconicos con total comodidad',
      text: 'Te llevamos a los destinos mas impresionantes con la mejor experiencia.',
      button: 'Explorar destinos',
      galleryLabel: 'Galeria de destinos principales',
      previousLabel: 'Destino anterior',
      nextLabel: 'Siguiente destino'
    },
    destinations: [
      {
        title: 'Grand Canyon',
        text: 'Vive la maravilla de una de las 7 maravillas naturales.',
        image: sharedImages.grandCanyon
      },
      {
        title: 'Hoover Dam',
        text: 'Una obra de ingenieria que no te puedes perder.',
        image: sharedImages.hooverDam
      },
      {
        title: 'Seven Magic Mountain',
        text: 'Una instalacion artistica unica y llena de color.',
        image: sharedImages.sevenMagic
      }
    ],
    why: {
      eyebrow: 'Por que elegirnos',
      title: 'Hacemos que cada viaje sea excepcional',
      reasons: [
        ['Seguridad primero', 'Vehiculos autorizados y choferes profesionales.'],
        ['Calidad premium', 'Vehiculos de lujo para una experiencia superior.'],
        ['100% personalizado', 'Servicios adaptados a tus necesidades y horario.'],
        ['Soporte 24/7', 'Estamos disponibles para ayudarte en todo momento.']
      ]
    },
    contact: {
      title: 'Listo para elevar tu experiencia de viaje?',
      text: 'Contactanos hoy y deja que nos encarguemos de cada detalle.'
    },
    footer: {
      description:
        'Ofrecemos transporte premium y servicios de concierge hacia Grand Canyon, Hoover Dam y Seven Magic Mountain.',
      quickLinks: 'Enlaces rapidos',
      servicesTitle: 'Servicios',
      destinationsTitle: 'Destinos',
      contactTitle: 'Contacto',
      smsReservations: 'Reservas por SMS y WhatsApp',
      location: 'Las Vegas, Nevada USA',
      disclaimer:
        'Aviso: All VIP Services ofrece transporte privado y coordinacion concierge. La disponibilidad de tours, rutas, horarios, lugares de terceros y paradas de cortesia puede variar segun agenda, condiciones locales y elegibilidad del servicio.',
      copyright: '© 2024 All VIP Services. Todos los derechos reservados.',
      privacy: 'Politica de privacidad',
      terms: 'Terminos y condiciones'
    }
  }
};
