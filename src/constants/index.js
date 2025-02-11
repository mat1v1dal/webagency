export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre nosotros',
    href: '#about',
  },
  {
    id: 3,
    name: 'Proyectos',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contacto',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Marcelo G. Valdez',
    position: 'Gerente General en Grava SRL',
    img: 'assets/review2.png',
    review:
      'El equipo de NoaCode superó nuestras expectativas con el desarrollo de nuestra landing page. Logramos una presencia online profesional y optimizada, lo que ha fortalecido nuestra imagen y captado nuevos clientes.',
  },
  {
    id: 2,
    name: 'Mario A. Vidal',
    position: 'Odontologo en Odontología Vidal',
    img: 'assets/marito.jpeg',
    review:
      'Gracias a NoaCode, nuestra clínica cuenta con un sitio moderno y eficiente. La implementación del sistema de turnos online ha mejorado la experiencia de nuestros pacientes y optimizado nuestra gestión.',
  },
  {
    id: 3,
    name: 'Martín Ríos',
    position: 'Coordinador de Tecnología en Odontología Vidal',
    img: 'assets/review3.png',
    review:
      'La solución de turnos online desarrollada por NoaCode ha sido un cambio total para nuestra clínica. La interfaz intuitiva y las notificaciones automáticas han facilitado la reserva de citas, mejorando la organización.',
  },
];

export const myProjects = [
  {
    title: 'Grava-srl, landing page',
    desc: 'Grava SRL, una empresa constructora con más de 20 años de trayectoria en La Rioja. El proyecto fue implementado con Next.js, optimizando la velocidad y el rendimiento del sitio. Se diseñó una interfaz intuitiva y profesional, resaltando los servicios y proyectos de la empresa. Además, se trabajó en estrategias de SEO para mejorar su posicionamiento en los motores de búsqueda.',
    subdesc:
      '',
    href: 'https://www.grava.com.ar/',
    texture: '/textures/project/grava.mp4',
    logo: '/assets/grava.svg',
    logoStyle: {
      backgroundColor: 'white',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Odontología Vidal, landing page',
    desc: 'Odontología Vidal es un consutorio con mas de 10 años de experiencia situado en Santiago del Estero, que decidió realizar una renovación de su sitio web. Se implementó una landing page con un diseño moderno y atractivo, que refleja la calidad y profesionalismo de sus servicios. Se utilizó Next.js para optimizar la velocidad y el rendimiento del sitio, y se trabajó en estrategias de SEO para mejorar su visibilidad en línea.',
    subdesc:
      'El sitio web sirvió para atraer nuevos pacientes y mejorar la presencia en línea de la clínica. Además, se implementó un sistema de citas en línea para facilitar la reserva de turnos.',
    href: 'https://odontologiavidal.vercel.app/#book',
    texture: '/textures/project/odontologia.mp4',
    logo: '/assets/odontologiavidal.png',
    logoStyle: {
      backgroundColor: 'white',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Odontologia Vidal, sistema de turnos',
    desc: 'Se realizó un sistema de turnos online para el consultorio odontologico Vidal, con el objetivo de facilitar la reserva de turnos para los pacientes. Se implementó un sistema de autenticación seguro y se trabajó en un diseño intuitivo y fácil de usar. Además, se integró un sistema de notificaciones por correo electrónico para recordar a los pacientes sobre sus citas.',
    subdesc:
      'Nos enfocamos en crear una interfaz de usuario atractiva y funcional, que permita a los pacientes reservar turnos de manera rápida y sencilla. El sistema de turnos online ha mejorado la eficiencia de la clínica y ha brindado una mejor experiencia al paciente.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Desarrollo Web',
    pos: 'Desarrolladores Frontend y Backend',
    duration: '2020 - Actualidad',
    title: "Ofrecemos soluciones personalizadas de desarrollo web para empresas de todos los tamaños. Creamos sitios web responsivos, con tecnologías modernas y optimizadas para una experiencia de usuario excepcional.",
    icon: '<i class="fas fa-laptop-code"></i>', // Ícono para Desarrollo Web (Font Awesome)
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Desarrollo de Aplicaciones Móviles',
    pos: 'Desarrolladores Móviles',
    duration: '2021 - Actualidad',
    title: "Desarrollamos aplicaciones móviles nativas y multiplataforma, asegurándonos de que sean funcionales, fáciles de usar y diseñadas para ofrecer el mejor rendimiento en dispositivos móviles.",
    icon: '<i class="fas fa-mobile-alt"></i>', // Ícono para Aplicaciones Móviles (Font Awesome)
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Consultoría y Soporte',
    pos: 'Consultores de Tecnología',
    duration: '2019 - Actualidad',
    title: "Brindamos consultoría tecnológica a empresas para optimizar sus procesos. También ofrecemos soporte continuo para asegurar el correcto funcionamiento de sus sistemas y aplicaciones.",
    icon: '<i class="fas fa-headset"></i>', // Ícono para Consultoría y Soporte (Font Awesome)
    animation: 'salute',
  },
];
