export interface PortfolioData {
  header: {
    home: string;
    aboutMe: string;
    resume: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  home: {
    greeting: string;
    title: string;
    name: string;
    profession: string;
    description: string;
    buttonText: string;
  };
  aboutMe: {
    title: string;
    subtitle: string;
    description: string;
    metrics: {
      experience: string;
      clients: string;
      projects: string;
      awards: string;
    };
    whatIDo: {
      title: string;
      services: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
  };
  resume: {
    title: string;
    education: Array<{
      year: string;
      title: string;
      description: string;
      achievements: string[];
    }>;
    experience: Array<{
      year: string;
      title: string;
      company: string;
      description: string;
      responsibilities: string[];
    }>;
  };
  contact: {
    title: string;
    description: string;
    details: {
      email: string;
      phone: string;
      location: string;
    };
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      buttonText: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
      errors: {
        nameRequired: string;
        nameMinLength: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        messageMinLength: string;
      }
    };
  };
  testimonials: {
    title: string;
    items: Array<{
      image: string;
      rating: number;
      name: string;
      title: string;
      text: string;
      date: string;
    }>;
  };
  portfolio: {
    title: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      desktop: string;
    };
    projects: Array<{
      id: number;
      title: string;
      category: 'web' | 'mobile' | 'desktop';
      thumbnail: string;
      description: string;
      technologies: string[];
      images: string[];
      details: {
        client: string;
        date: string;
        url?: string;
        challenge: string;
        solution: string;
      };
    }>;
  };
}

export const spanishData: PortfolioData = {
  header: {
    home: 'INICIO',
    aboutMe: 'SOBRE MÍ',
    resume: 'CURRÍCULUM',
    portfolio: 'PORTAFOLIO',
    testimonials: 'TESTIMONIOS',
    contact: 'CONTACTO'
  },
  home: {
    greeting: '¡HOLA!',
    title: 'SOY',
    name: 'ANGEL',
    profession: 'Full Stack Web & Mobile Developer',
    description: 'Soy un ingeniero de software apasionado con un fuerte enfoque en la entrega de productos de alta calidad y un compromiso constante con la innovación y la mejora continua...',
    buttonText: 'Más Sobre Mí'
  },
  aboutMe: {
    title: 'SOBRE MÍ',
    subtitle: 'Soy <span>Angel Gaitan</span>, Desarrollador Full Stack',
    description: 'Soy un ingeniero de software apasionado con un fuerte enfoque en la entrega de productos de alta calidad. Tengo una sólida comprensión de los fundamentos de la informática y los ciclos de vida del desarrollo de software. Competente en una variedad de lenguajes de programación, con experiencia en colaboración en equipo y metodologías de desarrollo ágil.',
    metrics: {
      experience: 'Años de Experiencia',
      clients: 'Clientes Satisfechos',
      projects: 'Proyectos Completados',
      awards: 'Premios Ganados'
    },
    whatIDo: {
      title: '¿Qué hago?',
      services: [
        
        {
          icon: '../../../assets/icons/navegador-web.png',
          title: 'Desarrollo Frontend',
          description: 'Diseño y desarrollo de interfaces de usuario interactivas y responsivas utilizando tecnologías modernas como Angular y React.'
        },
        {
          icon: '../../../assets/icons/bitcoin.png',
          title: 'Desarrollo de APIs RESTful',
          description: 'Creación de APIs robustas y escalables con Node.js y Express, optimizando la comunicación entre frontend y backend.'
        },
        {
          icon: '../../../assets/icons/bolsa-de-la-compra.png',
          title: 'E-commerce y Paneles de Control',
          description: 'Implementación de soluciones de e-commerce completas con paneles de control intuitivos para la gestión eficiente de productos y ventas.'
        }
      ]
    }
  },
  resume: {
    title: 'CURRÍCULUM',
    education: [
      {
        year: '2019 - 2024',
        title: 'MIMO - UNSL - SoyHenry',
        description: 'Universidad de San Luis y Cursos de desarrollo web y mobile',
        achievements: [
          'Mejor promedio de la promoción',
          'Proyecto destacado en desarrollo web',
          'Participación en proyectos reales de desarrollo web y mobile'
        ]
      },
      {
        year: '2023',
        title: 'Certificación English for IT B2 ',
        description: 'Certificación de inglés para profesionales de la tecnología',
        achievements: [
          'Certificación de inglés para profesionales de la tecnología',
        ]
      }
    ],
    experience: [
      {
        year: 'JUN 2024 - AGO 2024',
        title: 'Desarrollador Full Stack ',
        company: 'El Plac',
        description: 'Desarrollo de una aplicacion para la gestión de ferias de ropa',
        responsibilities: [
          'Desarrollé la base de datos y participe en el desarrollo de la API',
          'Estuve a cargo de la parte de despliegue de la aplicación y sistemas de contenedores',
          'Desarrollé algunas conexiones de la API con el frontend y estilizacion de algunos componentes',
          'Hice pruebas unitarias y de integración',
          'Implementé el sistema de notificaciones con websockets y el envio de emails',
          'Implementé el sistema de autenticación con JWT',
        ]
      },
      {
        year: 'OCT 2024 - ENE 2025',
        title: 'Desarrollador Full Stack',
        company: 'CARTA AI',
        description: 'Desarrollo de microservicios para la aplicación de Carta AI, y diseño de la arquitectura de la aplicación',
        responsibilities: [
          'Desarrollo de microservicios para la aplicación de Carta AI',
          'Diseño de muchos componentes de la aplicación, como el chat, el dashboard, el perfil del usuario, formularios, etc.',
          'Desarrollo de la conexion de backend y frontend',
          'Desarrollo de la parte de notificaciones',
          'Implementación de autenticación y autorización',
        ]
      }
    ]
  },
  contact: {
    title: 'CONTACTO',
    description: 'Ponte en contacto conmigo a través de los siguientes medios...',
    details: {
      email: 'angel.gaitan.ev@gmail.com',
      phone: '+54 9 266 464 72 28',
      location: 'San Luis, Argentina'
    },
    form: {
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Correo Electrónico',
      messagePlaceholder: 'Tu Mensaje',
      buttonText: 'Enviar',
      sending: 'Enviando...',
      successMessage: 'Mensaje enviado con éxito!',
      errorMessage: 'Error al enviar el mensaje.',
      errors: {
        nameRequired: 'El nombre es requerido',
        nameMinLength: 'El nombre debe tener al menos 3 caracteres',
        emailRequired: 'El correo electrónico es requerido',
        emailInvalid: 'El correo electrónico no es válido',
        messageRequired: 'El mensaje es requerido',
        messageMinLength: 'El mensaje debe tener al menos 10 caracteres'
      }
    }
  },
  testimonials: {
  title: 'TESTIMONIOS',
  items: [
    {
      image: 'https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94=',
      rating: 5,
      name: 'Salma Calista',
      title: 'Profesora de ingles',
      text: 'Trabajamos en mi página personal, con biografía y un blog donde puedo escribir mis diarios. Angel finalizó el trabajo antes de lo previsto y logró un diseño realmente hermoso. ¡Superó mis expectativas!',
      date: '10/9/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 5,
      name: 'Nicolás Fernández',
      title: 'Director - Athenea',
      text: 'Desarrolló una solución tecnológica innovadora que mejoró notablemente la comunicación interna de nuestra empresa. Ahora cada estado o situación se refleja automáticamente en nuestros grupos de WhatsApp. Un trabajo excelente.',
      date: '15/08/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 4.5,
      name: 'Jesús Madero',
      title: 'Escritor Freelance',
      text: 'Angel desarrolló mi portafolio web con una velocidad increíble y un diseño que no había pedido, pero que terminó siendo exactamente lo que necesitaba. Profesional y creativo.',
      date: '18/12/2024'
    },
    {
      image: 'https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94=',
      rating: 5,
      name: 'Clínica Arrúa',
      title: 'Centro Odontológico',
      text: 'Logró una paleta de colores perfecta para nuestra identidad, con un diseño adaptable, moderno y a un valor muy accesible. En poco tiempo creó un sitio web informativo ideal para la clínica.',
      date: '30/08/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 5,
      name: 'Sergio Tableda',
      title: 'CEO - Agiliza360',
      text: 'Angel se adaptó rápidamente a nuestro equipo y aprendió en poco tiempo a manejar nuestras tecnologías de frontend, evolucionando hasta convertirse en un excelente desarrollador full stack. Muy talentoso y comprometido.',
      date: '20/07/2025'
    }
  ]
},
  portfolio: {
    title: 'PORTAFOLIO',
    categories: {
      all: 'Todos',
      web: 'Web',
      mobile: 'Móvil',
      desktop: 'Ecommerce'
    },
    projects: [
      {
        id: 1,
        title: "Centro Odontológico Arrúa",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768878/Captura_de_pantalla_2025-10-06_134053_cfhhn0.png",
        description: "Landing page profesional para un centro odontológico, con enfoque en servicios, equipo médico y contacto directo.",
        technologies: ["Angular", "TypeScript", "HTML", "SCSS", "Figma", "Vercel"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_2_fcf8l4.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_sbivqz.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_1_qz9ggq.png",

        ],
        details: {
          client: "Centro Odontológico Arrúa",
          date: "2024-08-15",
          url: "https://centroarrua.com.ar",
          challenge: "Diseñar y desarrollar una página web moderna, confiable y clara que refleje la identidad profesional del centro odontológico, destacando sus servicios y facilitando el contacto con pacientes.",
          solution: "Se creó una landing page totalmente responsive con un diseño limpio y profesional, utilizando Angular para el desarrollo y Figma para el diseño visual. La página resalta los servicios, el equipo profesional y permite una comunicación directa con la clínica."
        }
      }
      ,
      {
          id: 1,
          title: "Streets",
          category: "mobile",
          thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759764079/Screenshot_20251006_121910_Streets2_yxep2w.jpg",
          description: "Aplicación móvil inspirada en Need for Speed Underground, una red social dedicada a los amantes del mundo automotor nocturno.",
          technologies: ["Ionic", "Angular", "Mapbox", "Figma", "ChatGPT", "NgRx", "RxJS", "TypeScript", "Android Studio"],
          images: [
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115205_Streets_b8cxvf.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115217_Streets_mxwvyh.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115332_Streets_xcichy.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115155_Streets_gdjqut.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115123_Streets_bkzyq5.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115316_Streets_vgctbd.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115253_Streets_hh6m5m.jpg",
            "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759764005/Screenshot_20251006_121910_Streets_jmjdo5.jpg"
          ],
          details: {
            client: "My Projects",
            date: "2025-03-31",
            url: "https://streets-one.vercel.app/",
            challenge: "Crear una aplicación móvil con estilo urbano y nocturno, que funcione como red social para entusiastas del automovilismo, con mapas, chat, eventos y perfiles personalizados.",
            solution: "Diseñada en Figma y desarrollada con Ionic y Angular, Streets integra Mapbox para la navegación, NgRx y RxJS para la gestión de estado y comunicación en tiempo real, además de un sistema de chat y exploración de eventos automovilísticos."
          }
        }
        ,
      {
        id: 0,
        title: "TukiTasks",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741540584/images/TukiTask-03-09-2025_02_14_PM_n49iuc.png",
        description: "Aplicación Full Stack para gestión de tareas con sistema de autenticación y perfil de usuario",
        technologies: ["Angular", "NodeJS", "Express", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git", "Vercel", "NestJS", "JWT", "Bcrypt", "TypeScript", "Railway"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536346/images/TukiTask-03-08-2025_10_02_PM_ve6bh5.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536359/images/TukiTask-03-08-2025_10_06_PM_wyn6nv.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741535440/images/TukiTask-03-09-2025_12_37_PM_oqohng.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741535446/images/TukiTask-03-08-2025_10_13_PM_1_hdb0l6.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536359/images/TukiTask-03-08-2025_10_06_PM_wyn6nv.png"
        ], 
        details: {
          client: "My Projects",
          date: "2025-01-10",
          url: "https://tukitasks.com.ar",
          challenge: "Desarrollar una aplicación Full Stack para la gestión de tareas que permita a los usuarios crear, editar y eliminar tareas, así como ver el progreso de cada una. Tambien cuenta con un sistema de pomodoro para mejorar la productividad.",
          solution: "Implementación de una arquitectura Full Stack con sistema de autenticación, gestión de perfiles de usuario y seguimiento de tareas en tiempo real. Notificaciones con websockets y envio de emails."
        }
      },
      {
        id: 1,
        title: "Elecar Appoints Manager",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_38_PM_udl5lj.png",
        description: "Aplicación Full Stack para gestión de turnos en talleres automotrices con sistema de notificaciones y perfil de usuario",
        technologies: ["React", "NodeJS", "Express", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_37_PM_1_e2jxjo.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_37_PM_yzrupo.png", 
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_38_PM_udl5lj.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://elecar-turn-manager.vercel.app/",
          challenge: "Desarrollar un sistema intuitivo para la gestión de turnos que permita a los usuarios programar servicios y recibir actualizaciones en tiempo real.",
          solution: "Implementación de una arquitectura Full Stack con sistema de notificaciones, gestión de perfiles de usuario y seguimiento de servicios en tiempo real."
        }
      },
      {
        id: 2,
        title: "Wander Aura",
        category: "mobile",
        thumbnail: "https://raw.githubusercontent.com/AngelGaitanG/WanderAura-mobile/refs/heads/main/wa.png",
        description: "Plataforma Full Stack para la organización de experiencias de viajes personalizables con sistema de votación y red social para compartir experiencias",
        technologies: ["Ionic", "Angular", "RXJS", "Capacitor", "HTML", "JavaScript", "SCSS", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_35_PM_vbh7by.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_36_PM_pgoj1p.png", 
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_20_PM_jgac9m.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://wander-aura-mobile.vercel.app/",
          challenge: "Crear una plataforma integral que permita a los usuarios planificar viajes personalizados, compartir experiencias y acceder a información relevante como el clima.",
          solution: "Desarrollo de una arquitectura Full Stack con autenticación segura, sistema de votación basado en preferencias y funcionalidades sociales para compartir experiencias de viaje."
        }
      },
      {
        id: 3,
        title: "Ecommerce Backend",
        category: "web", 
        thumbnail: "https://d1ih8jugeo2m5m.cloudfront.net/2022/07/el-ecommerce-que-es.jpg",
        description: "Backend robusto para plataforma de ecommerce con gestión de productos, categorías, usuarios, órdenes y pagos",
        technologies: ["NodeJS", "Express", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp",
          "https://therichpost.com/wp-content/uploads/2021/03/Best-Reactjs-Ecommerce-Templates-Free.png",
          "https://themefisher.com/blog/flipmart.webp"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://github.com/AngelGaitanG/ecommerce",
          challenge: "Desarrollar un backend robusto y seguro que permita gestionar todos los aspectos de una plataforma de comercio electrónico.",
          solution: "Implementación de una arquitectura escalable con sistema de autenticación, gestión de productos y órdenes, y procesamiento seguro de pagos."
        }
      },
      {
        id: 4,
        title: "Portfolio Profesional",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840611/portfolio/JPf-01-02-2025_02_55_PM_1_lgx0yp.png",
        description: "Portfolio profesional desarrollado para un cliente del sector de servicios, con diseño minimalista y enfoque en la experiencia de usuario. Incluye modo oscuro, animaciones suaves y formulario de contacto integrado.",
        technologies: ["Angular", "TypeScript", "SCSS"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_55_PM_we0xqi.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_54_PM_ujc3x4.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_56_PM_ojr1ji.png"
        ],
        details: {
          client: "Jesus Madero",
          date: "2024",
          url: "https://jesusmadero.vercel.app/home",
          challenge: "Crear una plataforma profesional que refleje la identidad de la marca mientras mantiene una interfaz limpia y funcional, con énfasis en la presentación de servicios y portafolio de proyectos.",
          solution: "Desarrollo de una single-page application con diseño responsivo, implementando una arquitectura modular y componentes reutilizables. Se integró un sistema de gestión de contenido para facilitar las actualizaciones y un formulario de contacto con validación en tiempo real."
        }
      },
      // {
      //   id: 5,
      //   title: "Página Personal - Yazmin Villota",
      //   category: "web",
      //   thumbnail: "ruta-a-la-imagen",
      //   description: "Sitio web personal diseñado para una artista, con un enfoque en la presentación de su obra pictórica y fotográfica. Incluye un blog para compartir pensamientos y experiencias artísticas.",
      //   technologies: ["Angular", "SCSS", "TypeScript"],
      //   images: [
      //     "https://picsum.photos/id/192/800/600",
      //     "https://picsum.photos/id/193/800/600",
      //     "https://picsum.photos/id/194/800/600"
      //   ],
      //   details: {
      //     client: "Yazmin Villota - Artista",
      //     date: "2024",
      //     url: "https://yazminvillota.vercel.app/",
      //     challenge: "Crear una plataforma visualmente atractiva que refleje el estilo artístico de la cliente, permitiendo la fácil navegación entre su galería de arte y su blog personal.",
      //     solution: "Desarrollo de un sitio web con un diseño inspirado en el arte de Vincent van Gogh, utilizando elementos visuales que complementan las obras de la artista. Se implementó un sistema de gestión de contenido para facilitar la publicación de blogs y la actualización de la galería."
      //   }
      // },
      {
        id: 6,
        title: "Sitio Web de Clínica Dental",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842116/portfolio/ArruaDentalClinic-01-02-2025_03_19_PM_o8a35q.png",
        description: "Página web para una clínica dental, diseñada para ofrecer información clara sobre servicios, equipo médico y contacto. Incluye un sistema de reservas en línea y secciones informativas sobre tratamientos.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842118/portfolio/ArruaDentalClinic-01-02-2025_03_20_PM_gio893.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842116/portfolio/ArruaDentalClinic-01-02-2025_03_21_PM_fw8nhm.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842118/portfolio/ArruaDentalClinic-01-02-2025_03_20_PM_1_mmnjoc.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://arrua.vercel.app/",
          challenge: "Desarrollar un sitio web que transmita confianza y profesionalismo, facilitando a los pacientes el acceso a información y la reserva de citas.",
          solution: "Implementación de un diseño moderno y responsivo, con un sistema de gestión de contenido para actualizar fácilmente la información de servicios y personal. Se integró un formulario de contacto y un sistema de reservas en línea para mejorar la experiencia del usuario."
        }
      }
    ]
  }
};

export const englishData: PortfolioData = {
  header: {
    home: 'HOME',
    aboutMe: 'ABOUT ME',
    resume: 'RESUME',
    portfolio: 'PORTFOLIO',
    testimonials: 'TESTIMONIALS',
    contact: 'CONTACT'
  },
  home: {
    greeting: 'HELLO!',
    title: 'I AM',
    name: 'ANGEL',
    profession: 'Software Engineer',
    description: 'I am a passionate software engineer with a strong focus on delivering high-quality products and a constant commitment to innovation and continuous improvement...',
    buttonText: 'Learn More About Me'
  },
  aboutMe: {
    title: 'ABOUT ME',
    subtitle: 'I am <span>Angel Gaitan</span>, Full Stack Developer',
    description: 'I am a passionate software engineer with a strong focus on delivering high-quality products. I have a solid understanding of computer science fundamentals and software development life cycles. Proficient in a range of programming languages, with experience in team collaboration and agile development methodologies.',
    metrics: {
      experience: 'Years of Experience',
      clients: 'Happy Clients',
      projects: 'Projects Completed',
      awards: 'Awards Won'
    },
    whatIDo: {
      title: 'What I Do?',
      services: [
        {
          icon: '../../../assets/icons/navegador-web.png',
          title: 'Full Stack Web Development',
          description: 'I create robust web applications with Angular and NestJS, ensuring a smooth experience and high performance.'
        },
        {
          icon: '../../../assets/icons/bitcoin.png',
          title: 'Mobile App Development',
          description: 'I develop cross-platform apps with Ionic, offering innovative solutions for various sectors.'
        },
        {
          icon: '../../../assets/icons/bolsa-de-la-compra.png',
          title: 'E-commerce Solutions',
          description: 'I implement secure e-commerce platforms, integrating payment systems and optimizing the shopping experience.'
        }
      ]
    }
  },
  resume: {
    title: 'RESUME',
    education: [
      {
        year: '2019 - 2024',
        title: 'MIMO - UNSL - SoyHenry',
        description: 'University of San Luis and Web & Mobile Development Courses',
        achievements: [
          'Top class average',
          'Outstanding web development project',
          'Participation in real web and mobile development projects'
        ]
      },
      {
        year: '2023',
        title: 'English for IT B2 Certification',
        description: 'English certification for IT professionals',
        achievements: [
          'English certification for IT professionals',
        ]
      }
    ],
    experience: [
      {
        year: 'JUN 2024 - AUG 2024',
        title: 'Full Stack Developer',
        company: 'El Plac',
        description: 'Development of an application for managing clothing fairs',
        responsibilities: [
          'Developed the database and participated in API development',
          'Was in charge of application deployment and container systems',
          'Developed some API connections with the frontend and styling of components',
          'Conducted unit and integration testing',
          'Implemented notification system with websockets and email sending',
          'Implemented authentication system with JWT',
        ]
      },
      {
        year: 'OCT 2024 - JAN 2025',
        title: 'Full Stack Developer',
        company: 'CARTA AI',
        description: 'Development of microservices for the Carta AI application, and design of the application architecture',
        responsibilities: [
          'Development of microservices for the Carta AI application',
          'Design of many application components, such as chat, dashboard, user profile, forms, etc.',
          'Development of backend and frontend connection',
          'Development of the notifications part',
          'Implementation of authentication and authorization',
        ]
      }
    ]
  },
  contact: {
    title: 'CONTACT',
    description: 'Get in touch with me through the following channels...',
    details: {
      email: 'angel.gaitan.ev@gmail.com',
      phone: '+54 9 266 464 72 28',
      location: 'San Luis, Argentina'
    },
    form: {
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      buttonText: 'Send',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message.',
      errors: {
        nameRequired: 'The name is required',
        nameMinLength: 'The name must have at least 3 characters',
        emailRequired: 'The email is required',
        emailInvalid: 'The email is not valid',
        messageRequired: 'The message is required',
        messageMinLength: 'The message must have at least 10 characters'
      }
    }
  },
  testimonials: {
  title: 'TESTIMONIALS',
  items: [
    {
      image: 'https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94=',
      rating: 5,
      name: 'Salma Calista',
      title: 'English Teacher',
      text: 'We worked on my personal website, featuring a biography and a blog where I can write my journals. Angel finished the project ahead of schedule and achieved a truly beautiful design. He exceeded my expectations!',
      date: '09/10/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 5,
      name: 'Nicolás Fernández',
      title: 'Director - Athenea',
      text: 'He developed an innovative technological solution that significantly improved our company’s internal communication. Now every status or situation is automatically reflected in our WhatsApp groups. Excellent work.',
      date: '08/15/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 4.5,
      name: 'Jesús Madero',
      title: 'Freelance Writer',
      text: 'Angel built my personal portfolio website incredibly fast, with a design I hadn’t asked for but turned out to be exactly what I needed. Professional and creative.',
      date: '12/18/2024'
    },
    {
      image: 'https://media.istockphoto.com/id/2062236772/vector/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user.jpg?s=612x612&w=0&k=20&c=k89Udc50y4K9hik9ZYBDz0gVsCzSeXgPcTRBN5aPy94=',
      rating: 5,
      name: 'Clínica Arrúa',
      title: 'Dental Center',
      text: 'He created a color palette perfectly matching our identity, with a modern and adaptable design at a very affordable cost. In a short time, he delivered an informative website ideal for our clinic.',
      date: '08/30/2025'
    },
    {
      image: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
      rating: 5,
      name: 'Sergio Tableda',
      title: 'CEO - Agiliza360',
      text: 'Angel quickly adapted to our team and learned our frontend technologies in record time, eventually performing as a skilled full-stack developer. Very talented and dedicated.',
      date: '07/20/2025'
    }
  ]
}
,
  portfolio: {
    title: 'PORTFOLIO',
    categories: {
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      desktop: 'Ecommerce'
    },
    projects: [
      {
        id: 1,
        title: "Centro Odontológico Arrúa",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768878/Captura_de_pantalla_2025-10-06_134053_cfhhn0.png",
        description: "Professional landing page for a dental center, focused on services, medical team, and direct contact.",
        technologies: ["Angular", "TypeScript", "HTML", "SCSS", "Figma", "Vercel"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_2_fcf8l4.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_sbivqz.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759768758/Centro-Odontol%C3%B3gico-Arr%C3%BAa-Cl%C3%ADnica-Dental-en-Argentina-10-06-2025_01_36_PM_1_qz9ggq.png"
        ],
        details: {
          client: "Centro Odontológico Arrúa",
          date: "2025-08-15",
          url: "https://centroarrua.com.ar",
          challenge: "Design and develop a modern, reliable, and clear website that reflects the professional identity of the dental center, highlighting its services and facilitating communication with patients.",
          solution: "A fully responsive landing page was created with a clean and professional design, built with Angular for the frontend and designed in Figma. The site highlights services, professional staff, and enables direct contact with the clinic."
        }
      },
      {
        id: 2,
        title: "Streets",
        category: "mobile",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759764079/Screenshot_20251006_121910_Streets2_yxep2w.jpg",
        description: "Mobile application inspired by Need for Speed Underground — a social network for car enthusiasts and the nighttime automotive scene.",
        technologies: ["Ionic", "Angular", "Mapbox", "Figma", "ChatGPT", "NgRx", "RxJS", "TypeScript", "Android Studio"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115205_Streets_b8cxvf.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115217_Streets_mxwvyh.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762877/Screenshot_20251006_115332_Streets_xcichy.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115155_Streets_gdjqut.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115123_Streets_bkzyq5.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115316_Streets_vgctbd.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759762876/Screenshot_20251006_115253_Streets_hh6m5m.jpg",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1759764005/Screenshot_20251006_121910_Streets_jmjdo5.jpg"
        ],
        details: {
          client: "My Projects",
          date: "2025-03-31",
          url: "https://streets-one.vercel.app/",
          challenge: "Build a mobile app with an urban and night-style aesthetic that serves as a social platform for car enthusiasts, featuring maps, chat, events, and personal profiles.",
          solution: "Designed in Figma and developed with Ionic and Angular, Streets integrates Mapbox for navigation, NgRx and RxJS for state management and real-time communication, and includes chat and event exploration features for the automotive community."
        }
      }
      ,
      {
        id: 0,
        title: "TukiTasks",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741540584/images/TukiTask-03-09-2025_02_14_PM_n49iuc.png",
        description: "Full Stack application for task management with authentication system and user profile",
        technologies: ["Angular", "NodeJS", "Express", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git", "Vercel", "NestJS", "JWT", "Bcrypt", "TypeScript", "Railway"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536346/images/TukiTask-03-08-2025_10_02_PM_ve6bh5.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536359/images/TukiTask-03-08-2025_10_06_PM_wyn6nv.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741535440/images/TukiTask-03-09-2025_12_37_PM_oqohng.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741535446/images/TukiTask-03-08-2025_10_13_PM_1_hdb0l6.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1741536359/images/TukiTask-03-08-2025_10_06_PM_wyn6nv.png"
        ], 
        details: {
          client: "My Projects",
          date: "2025-01-10",
          url: "https://tukitasks.com.ar",
          challenge: "Develop a Full Stack application for task management that allows users to create, edit, and delete tasks, as well as view the progress of each one. It also includes a pomodoro system to improve productivity.",
          solution: "Implementation of a Full Stack architecture with authentication system, user profile management, and real-time task tracking. Notifications with websockets and email sending."
        }
      },
      {
        id: 1,
        title: "Elecar Appoints Manager",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_38_PM_udl5lj.png",
        description: "Full Stack application for managing appointments in automotive workshops with notification system and user profile",
        technologies: ["React", "NodeJS", "Express", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_37_PM_1_e2jxjo.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_37_PM_yzrupo.png", 
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735836787/portfolio/ElleCar-01-02-2025_01_38_PM_udl5lj.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://elecar-turn-manager.vercel.app/",
          challenge: "Develop an intuitive system for managing appointments that allows users to schedule services and receive real-time updates.",
          solution: "Implementation of a Full Stack architecture with notification system, user profile management, and real-time service tracking."
        }
      },
      {
        id: 2,
        title: "Wander Aura",
        category: "mobile",
        thumbnail: "https://raw.githubusercontent.com/AngelGaitanG/WanderAura-mobile/refs/heads/main/wa.png",
        description: "Full Stack platform for organizing customizable travel experiences with voting system and social network for sharing experiences",
        technologies: ["Ionic", "Angular", "RXJS", "Capacitor", "HTML", "JavaScript", "SCSS", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_35_PM_vbh7by.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_36_PM_pgoj1p.png", 
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735839424/portfolio/Ionic-App-01-02-2025_02_20_PM_jgac9m.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://wander-aura-mobile.vercel.app/",
          challenge: "Create a comprehensive platform that allows users to plan personalized trips, share experiences, and access relevant information such as weather.",
          solution: "Development of a Full Stack architecture with secure authentication, preference-based voting system, and social features for sharing travel experiences."
        }
      },
      {
        id: 3,
        title: "Ecommerce Backend",
        category: "web",
        thumbnail: "https://d1ih8jugeo2m5m.cloudfront.net/2022/07/el-ecommerce-que-es.jpg",
        description: "Robust backend for ecommerce platform with product, category, user, order, and payment management",
        technologies: ["NodeJS", "Express", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://www.templateshub.net/uploads/1545118579%201544149615%20marazzo.webp",
          "https://therichpost.com/wp-content/uploads/2021/03/Best-Reactjs-Ecommerce-Templates-Free.png",
          "https://themefisher.com/blog/flipmart.webp"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://github.com/AngelGaitanG/ecommerce",
          challenge: "Develop a robust and secure backend that allows managing all aspects of an ecommerce platform.",
          solution: "Implementation of a scalable architecture with authentication system, product and order management, and secure payment processing."
        }
      },
      {
        id: 4,
        title: "Professional Portfolio",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840611/portfolio/JPf-01-02-2025_02_55_PM_1_lgx0yp.png",
        description: "Professional portfolio developed for a client in the services sector, with minimalist design and focus on user experience. Includes dark mode, smooth animations, and integrated contact form.",
        technologies: ["Angular", "TypeScript", "SCSS"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_55_PM_we0xqi.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_54_PM_ujc3x4.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735840610/portfolio/JPf-01-02-2025_02_56_PM_ojr1ji.png"
        ],
        details: {
          client: "Jesus Madero",
          date: "2024",
          url: "https://jesusmadero.vercel.app/home",
          challenge: "Create a professional platform that reflects the brand identity while maintaining a clean and functional interface, with emphasis on service presentation and project portfolio.",
          solution: "Development of a single-page application with responsive design, implementing a modular architecture and reusable components. A content management system was integrated to facilitate updates and a contact form with real-time validation."
        }
      },
      // {
      //   id: 5,
      //   title: "Personal Page - Yazmin Villota",
      //   category: "web",
      //   thumbnail: "ruta-a-la-imagen",
      //   description: "Personal website designed for an artist, focusing on the presentation of her pictorial and photographic work. Includes a blog to share artistic thoughts and experiences.",
      //   technologies: ["Angular", "SCSS", "TypeScript"],
      //   images: [
      //     "https://picsum.photos/id/192/800/600",
      //     "https://picsum.photos/id/193/800/600",
      //     "https://picsum.photos/id/194/800/600"
      //   ],
      //   details: {
      //     client: "Yazmin Villota - Artist",
      //     date: "2024",
      //     url: "https://yazminvillota.vercel.app/",
      //     challenge: "Create a visually appealing platform that reflects the client's artistic style, allowing easy navigation between her art gallery and personal blog.",
      //     solution: "Development of a website with a design inspired by Vincent van Gogh's art, using visual elements that complement the artist's works. A content management system was implemented to facilitate blog publishing and gallery updates."
      //   }
      // },
      {
        id: 6,
        title: "Dental Clinic Website",
        category: "web",
        thumbnail: "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842116/portfolio/ArruaDentalClinic-01-02-2025_03_19_PM_o8a35q.png",
        description: "Website for a dental clinic, designed to offer clear information about services, medical team, and contact. Includes an online booking system and informative sections about treatments.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842118/portfolio/ArruaDentalClinic-01-02-2025_03_20_PM_gio893.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842116/portfolio/ArruaDentalClinic-01-02-2025_03_21_PM_fw8nhm.png",
          "https://res.cloudinary.com/dkdsfv4ov/image/upload/v1735842118/portfolio/ArruaDentalClinic-01-02-2025_03_20_PM_1_mmnjoc.png"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://arrua.vercel.app/",
          challenge: "Develop a website that conveys trust and professionalism, facilitating patients' access to information and appointment booking.",
          solution: "Implementation of a modern and responsive design, with a content management system to easily update service and staff information. A contact form and online booking system were integrated to enhance user experience."
        }
      }
    ]
  }
}; 