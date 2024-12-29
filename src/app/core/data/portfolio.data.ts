export interface PortfolioData {
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
        year: '2018 - 2023',
        title: 'Ingeniería en Sistemas',
        description: 'Universidad Nacional de Colombia',
        achievements: [
          'Mejor promedio de la promoción',
          'Proyecto destacado en desarrollo web',
          'Participación en hackathons universitarios'
        ]
      },
      {
        year: '2023',
        title: 'Certificación AWS Developer Associate',
        description: 'Amazon Web Services',
        achievements: [
          'Especialización en servicios cloud',
          'Desarrollo de arquitecturas serverless',
          'Implementación de soluciones escalables'
        ]
      }
    ],
    experience: [
      {
        year: '2022 - Presente',
        title: 'Desarrollador Full Stack Senior',
        company: 'Tech Solutions Inc.',
        description: 'Desarrollo de aplicaciones web empresariales usando Angular y NestJS',
        responsibilities: [
          'Liderazgo técnico de equipo de desarrollo',
          'Implementación de arquitecturas escalables',
          'Optimización de rendimiento y SEO',
          'Mentoría a desarrolladores junior'
        ]
      },
      {
        year: '2020 - 2022',
        title: 'Desarrollador Frontend',
        company: 'Digital Innovation Labs',
        description: 'Desarrollo de interfaces de usuario modernas y responsivas',
        responsibilities: [
          'Desarrollo de componentes reutilizables',
          'Integración con APIs RESTful',
          'Implementación de pruebas unitarias',
          'Optimización de experiencia de usuario'
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
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 5,
        name: 'Juan Pérez',
        title: 'CEO - Tech Solutions',
        text: 'Excelente profesional. Entregó el proyecto antes de tiempo y con una calidad excepcional. Su atención al detalle y capacidad para entender nuestras necesidades fue sobresaliente.',
        date: '15/03/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 5,
        name: 'María García',
        title: 'Directora de Marketing - Digital Innovation',
        text: 'Un desarrollador muy talentoso y comprometido. Supo implementar exactamente lo que necesitábamos y siempre estuvo disponible para hacer ajustes.',
        date: '10/03/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        rating: 4,
        name: 'Carlos Rodríguez',
        title: 'CTO - StartupX',
        text: 'Gran experiencia trabajando juntos. Demostró un profundo conocimiento técnico y excelentes habilidades de comunicación.',
        date: '01/03/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 5,
        name: 'Ana Martínez',
        title: 'Product Owner - InnovaTech',
        text: 'Profesional altamente recomendable. Su capacidad para resolver problemas y proponer soluciones innovadoras fue clave para el éxito de nuestro proyecto.',
        date: '20/02/2024'
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
        title: "Elecar Appoints Manager",
        category: "web",
        thumbnail: "https://picsum.photos/id/180/800/600",
        description: "Aplicación Full Stack para gestión de turnos en talleres automotrices con sistema de notificaciones y perfil de usuario",
        technologies: ["React", "NodeJS", "Express", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"],
        images: [
          "https://picsum.photos/id/180/800/600",
          "https://picsum.photos/id/181/800/600", 
          "https://picsum.photos/id/182/800/600"
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
        thumbnail: "https://picsum.photos/id/183/800/600",
        description: "Plataforma Full Stack para la organización de experiencias de viajes personalizables con sistema de votación y red social para compartir experiencias",
        technologies: ["Ionic", "Angular", "RXJS", "Capacitor", "HTML", "JavaScript", "SCSS", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://picsum.photos/id/183/800/600",
          "https://picsum.photos/id/184/800/600", 
          "https://picsum.photos/id/185/800/600"
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
        thumbnail: "https://picsum.photos/id/186/800/600",
        description: "Backend robusto para plataforma de ecommerce con gestión de productos, categorías, usuarios, órdenes y pagos",
        technologies: ["NodeJS", "Express", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://picsum.photos/id/186/800/600",
          "https://picsum.photos/id/187/800/600",
          "https://picsum.photos/id/188/800/600"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://ecommerce-backend.vercel.app/",
          challenge: "Desarrollar un backend robusto y seguro que permita gestionar todos los aspectos de una plataforma de comercio electrónico.",
          solution: "Implementación de una arquitectura escalable con sistema de autenticación, gestión de productos y órdenes, y procesamiento seguro de pagos."
        }
      },
      {
        id: 4,
        title: "Portfolio Profesional",
        category: "web",
        thumbnail: "https://picsum.photos/id/189/800/600",
        description: "Portfolio profesional desarrollado para un cliente del sector de servicios, con diseño minimalista y enfoque en la experiencia de usuario. Incluye modo oscuro, animaciones suaves y formulario de contacto integrado.",
        technologies: ["Angular", "TypeScript", "SCSS"],
        images: [
          "https://picsum.photos/id/189/800/600",
          "https://picsum.photos/id/190/800/600",
          "https://picsum.photos/id/191/800/600"
        ],
        details: {
          client: "Jesus Madero",
          date: "2024",
          url: "https://jesusmadero.vercel.app/home",
          challenge: "Crear una plataforma profesional que refleje la identidad de la marca mientras mantiene una interfaz limpia y funcional, con énfasis en la presentación de servicios y portafolio de proyectos.",
          solution: "Desarrollo de una single-page application con diseño responsivo, implementando una arquitectura modular y componentes reutilizables. Se integró un sistema de gestión de contenido para facilitar las actualizaciones y un formulario de contacto con validación en tiempo real."
        }
      },
      {
        id: 5,
        title: "Página Personal - Yazmin Villota",
        category: "web",
        thumbnail: "ruta-a-la-imagen",
        description: "Sitio web personal diseñado para una artista, con un enfoque en la presentación de su obra pictórica y fotográfica. Incluye un blog para compartir pensamientos y experiencias artísticas.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://picsum.photos/id/192/800/600",
          "https://picsum.photos/id/193/800/600",
          "https://picsum.photos/id/194/800/600"
        ],
        details: {
          client: "Yazmin Villota - Artista",
          date: "2024",
          url: "https://yazminvillota.vercel.app/",
          challenge: "Crear una plataforma visualmente atractiva que refleje el estilo artístico de la cliente, permitiendo la fácil navegación entre su galería de arte y su blog personal.",
          solution: "Desarrollo de un sitio web con un diseño inspirado en el arte de Vincent van Gogh, utilizando elementos visuales que complementan las obras de la artista. Se implementó un sistema de gestión de contenido para facilitar la publicación de blogs y la actualización de la galería."
        }
      },
      {
        id: 6,
        title: "Sitio Web de Clínica Dental",
        category: "web",
        thumbnail: "https://picsum.photos/id/195/800/600",
        description: "Página web para una clínica dental, diseñada para ofrecer información clara sobre servicios, equipo médico y contacto. Incluye un sistema de reservas en línea y secciones informativas sobre tratamientos.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://picsum.photos/id/195/800/600",
          "https://picsum.photos/id/196/800/600",
          "https://picsum.photos/id/197/800/600"
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
        year: '2018 - 2023',
        title: 'Systems Engineering',
        description: 'National University of Colombia',
        achievements: [
          'Top of class',
          'Outstanding web development project',
          'Participation in university hackathons'
        ]
      },
      {
        year: '2023',
        title: 'AWS Developer Associate Certification',
        description: 'Amazon Web Services',
        achievements: [
          'Cloud services specialization',
          'Serverless architecture development',
          'Implementation of scalable solutions'
        ]
      }
    ],
    experience: [
      {
        year: '2022 - Present',
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        description: 'Development of enterprise web applications using Angular and NestJS',
        responsibilities: [
          'Technical team leadership',
          'Implementation of scalable architectures',
          'Performance and SEO optimization',
          'Mentoring junior developers'
        ]
      },
      {
        year: '2020 - 2022',
        title: 'Frontend Developer',
        company: 'Digital Innovation Labs',
        description: 'Development of modern and responsive user interfaces',
        responsibilities: [
          'Development of reusable components',
          'RESTful APIs integration',
          'Unit testing implementation',
          'User experience optimization'
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
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 5,
        name: 'John Smith',
        title: 'CEO - Tech Solutions',
        text: 'Excellent professional. Delivered the project ahead of schedule with exceptional quality. His attention to detail and ability to understand our needs was outstanding.',
        date: '03/15/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 5,
        name: 'Mary Johnson',
        title: 'Marketing Director - Digital Innovation',
        text: 'A very talented and committed developer. He knew how to implement exactly what we needed and was always available for adjustments.',
        date: '03/10/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        rating: 4,
        name: 'Charles Wilson',
        title: 'CTO - StartupX',
        text: 'Great experience working together. Demonstrated deep technical knowledge and excellent communication skills.',
        date: '03/01/2024'
      },
      {
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 5,
        name: 'Anna Brown',
        title: 'Product Owner - InnovaTech',
        text: 'Highly recommended professional. His ability to solve problems and propose innovative solutions was key to the success of our project.',
        date: '02/20/2024'
      }
    ]
  },
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
        title: "Elecar Appoints Manager",
        category: "web",
        thumbnail: "https://picsum.photos/id/180/800/600",
        description: "Full Stack application for managing appointments in automotive workshops with notification system and user profile",
        technologies: ["React", "NodeJS", "Express", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"],
        images: [
          "https://picsum.photos/id/180/800/600",
          "https://picsum.photos/id/181/800/600", 
          "https://picsum.photos/id/182/800/600"
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
        thumbnail: "https://picsum.photos/id/183/800/600",
        description: "Full Stack platform for organizing customizable travel experiences with voting system and social network for sharing experiences",
        technologies: ["Ionic", "Angular", "RXJS", "Capacitor", "HTML", "JavaScript", "SCSS", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://picsum.photos/id/183/800/600",
          "https://picsum.photos/id/184/800/600", 
          "https://picsum.photos/id/185/800/600"
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
        thumbnail: "https://picsum.photos/id/186/800/600",
        description: "Robust backend for ecommerce platform with product, category, user, order, and payment management",
        technologies: ["NodeJS", "Express", "PostgreSQL", "Git", "GitHub", "Docker", "NestJS", "JWT", "Bcrypt", "TypeScript"],
        images: [
          "https://picsum.photos/id/186/800/600",
          "https://picsum.photos/id/187/800/600",
          "https://picsum.photos/id/188/800/600"
        ],
        details: {
          client: "My Projects",
          date: "2024",
          url: "https://ecommerce-backend.vercel.app/",
          challenge: "Develop a robust and secure backend that allows managing all aspects of an ecommerce platform.",
          solution: "Implementation of a scalable architecture with authentication system, product and order management, and secure payment processing."
        }
      },
      {
        id: 4,
        title: "Professional Portfolio",
        category: "web",
        thumbnail: "https://picsum.photos/id/189/800/600",
        description: "Professional portfolio developed for a client in the services sector, with minimalist design and focus on user experience. Includes dark mode, smooth animations, and integrated contact form.",
        technologies: ["Angular", "TypeScript", "SCSS"],
        images: [
          "https://picsum.photos/id/189/800/600",
          "https://picsum.photos/id/190/800/600",
          "https://picsum.photos/id/191/800/600"
        ],
        details: {
          client: "Jesus Madero",
          date: "2024",
          url: "https://jesusmadero.vercel.app/home",
          challenge: "Create a professional platform that reflects the brand identity while maintaining a clean and functional interface, with emphasis on service presentation and project portfolio.",
          solution: "Development of a single-page application with responsive design, implementing a modular architecture and reusable components. A content management system was integrated to facilitate updates and a contact form with real-time validation."
        }
      },
      {
        id: 5,
        title: "Personal Page - Yazmin Villota",
        category: "web",
        thumbnail: "ruta-a-la-imagen",
        description: "Personal website designed for an artist, focusing on the presentation of her pictorial and photographic work. Includes a blog to share artistic thoughts and experiences.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://picsum.photos/id/192/800/600",
          "https://picsum.photos/id/193/800/600",
          "https://picsum.photos/id/194/800/600"
        ],
        details: {
          client: "Yazmin Villota - Artist",
          date: "2024",
          url: "https://yazminvillota.vercel.app/",
          challenge: "Create a visually appealing platform that reflects the client's artistic style, allowing easy navigation between her art gallery and personal blog.",
          solution: "Development of a website with a design inspired by Vincent van Gogh's art, using visual elements that complement the artist's works. A content management system was implemented to facilitate blog publishing and gallery updates."
        }
      },
      {
        id: 6,
        title: "Dental Clinic Website",
        category: "web",
        thumbnail: "https://picsum.photos/id/195/800/600",
        description: "Website for a dental clinic, designed to offer clear information about services, medical team, and contact. Includes an online booking system and informative sections about treatments.",
        technologies: ["Angular", "SCSS", "TypeScript"],
        images: [
          "https://picsum.photos/id/195/800/600",
          "https://picsum.photos/id/196/800/600",
          "https://picsum.photos/id/197/800/600"
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