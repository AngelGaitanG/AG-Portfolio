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
      desktop: 'Escritorio'
    },
    projects: [
      {
        id: 1,
        title: "Dashboard E-commerce",
        category: "web",
        thumbnail: "https://picsum.photos/id/180/800/600",
        description: "Dashboard administrativo para gestión de e-commerce con análisis en tiempo real",
        technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
        images: [
          "https://picsum.photos/id/180/800/600",
          "https://picsum.photos/id/181/800/600",
          "https://picsum.photos/id/182/800/600"
        ],
        details: {
          client: "TechStore Inc.",
          date: "2023",
          url: "https://techstore-dashboard.com",
          challenge: "Crear una interfaz intuitiva para gestionar grandes volúmenes de productos y pedidos en tiempo real.",
          solution: "Implementación de arquitectura escalable con microservicios y sistema de caché para optimizar el rendimiento."
        }
      },
      {
        id: 2,
        title: "Aplicación de Fitness",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/183/800/600",
        description: "Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición",
        technologies: ["Ionic", "Angular", "Firebase", "NodeJS"],
        images: [
          "https://picsum.photos/id/183/800/600",
          "https://picsum.photos/id/184/800/600",
          "https://picsum.photos/id/185/800/600"
        ],
        details: {
          client: "FitLife Solutions",
          date: "2023",
          url: "https://fitlife-app.com",
          challenge: "Desarrollar una aplicación intuitiva que motive a los usuarios a mantener un estilo de vida saludable.",
          solution: "Implementación de gamificación y sistema de recompensas para mantener el engagement de los usuarios."
        }
      },
      {
        id: 3,
        title: "Plataforma de Gestión de Tareas",
        category: "web",
        thumbnail: "https://picsum.photos/id/186/800/600",
        description: "Plataforma de gestión de proyectos y tareas colaborativa",
        technologies: ["React", "Redux", "Express", "MongoDB"],
        images: [
          "https://picsum.photos/id/186/800/600",
          "https://picsum.photos/id/187/800/600",
          "https://picsum.photos/id/188/800/600"
        ],
        details: {
          client: "ProjectPro Inc.",
          date: "2022",
          url: "https://projectpro-platform.com",
          challenge: "Crear una plataforma que simplifique la gestión de proyectos complejos en equipos distribuidos.",
          solution: "Desarrollo de una interfaz drag-and-drop intuitiva con actualizaciones en tiempo real."
        }
      },
      {
        id: 4,
        title: "Sistema de Control Domótico",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/189/800/600",
        description: "Aplicación de escritorio para control domótico integral",
        technologies: ["Electron", "Vue.js", "Python", "MQTT"],
        images: [
          "https://picsum.photos/id/189/800/600",
          "https://picsum.photos/id/190/800/600",
          "https://picsum.photos/id/191/800/600"
        ],
        details: {
          client: "SmartTech Solutions",
          date: "2023",
          challenge: "Desarrollar una interfaz unificada para controlar múltiples dispositivos IoT.",
          solution: "Implementación de arquitectura modular y protocolo MQTT para comunicación en tiempo real."
        }
      },
      {
        id: 5,
        title: "Sistema de Gestión de Inventario",
        category: "web",
        thumbnail: "https://picsum.photos/id/192/800/600",
        description: "Sistema de gestión de inventario multialmacén",
        technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
        images: [
          "https://picsum.photos/id/192/800/600",
          "https://picsum.photos/id/193/800/600",
          "https://picsum.photos/id/194/800/600"
        ],
        details: {
          client: "LogisticsPro Corp",
          date: "2023",
          challenge: "Optimizar la gestión de inventario en múltiples ubicaciones.",
          solution: "Sistema predictivo de stock y automatización de pedidos."
        }
      },
      {
        id: 6,
        title: "Plataforma de Aprendizaje Online",
        category: "web",
        thumbnail: "https://picsum.photos/id/195/800/600",
        description: "LMS con funcionalidades de videoconferencia y evaluación en tiempo real",
        technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
        images: [
          "https://picsum.photos/id/195/800/600",
          "https://picsum.photos/id/196/800/600",
          "https://picsum.photos/id/197/800/600"
        ],
        details: {
          client: "EduTech Solutions",
          date: "2023",
          url: "https://edutech-platform.com",
          challenge: "Crear una plataforma educativa escalable con soporte para miles de usuarios simultáneos.",
          solution: "Implementación de arquitectura serverless y optimización de streaming de video."
        }
      },
      {
        id: 7,
        title: "App de Delivery",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/198/800/600",
        description: "Aplicación móvil para gestión de entregas y seguimiento en tiempo real",
        technologies: ["Flutter", "Firebase", "Google Maps API"],
        images: [
          "https://picsum.photos/id/198/800/600",
          "https://picsum.photos/id/199/800/600",
          "https://picsum.photos/id/200/800/600"
        ],
        details: {
          client: "FastDelivery",
          date: "2023",
          challenge: "Desarrollar un sistema preciso de tracking y asignación de repartidores.",
          solution: "Implementación de algoritmos de optimización de rutas y geolocalización en tiempo real."
        }
      },
      {
        id: 8,
        title: "Sistema POS",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/201/800/600",
        description: "Software de punto de venta con gestión de inventario",
        technologies: ["Electron", "React", "SQLite", "Node.js"],
        images: [
          "https://picsum.photos/id/201/800/600",
          "https://picsum.photos/id/202/800/600",
          "https://picsum.photos/id/203/800/600"
        ],
        details: {
          client: "RetailTech",
          date: "2022",
          challenge: "Crear un sistema offline-first con sincronización en la nube.",
          solution: "Desarrollo de sistema de cola de sincronización y manejo de conflictos."
        }
      },
      {
        id: 9,
        title: "CRM Empresarial",
        category: "web",
        thumbnail: "https://picsum.photos/id/204/800/600",
        description: "Sistema de gestión de relaciones con clientes",
        technologies: ["Angular", "Java Spring", "PostgreSQL"],
        images: [
          "https://picsum.photos/id/204/800/600",
          "https://picsum.photos/id/205/800/600",
          "https://picsum.photos/id/206/800/600"
        ],
        details: {
          client: "Business Solutions Corp",
          date: "2023",
          challenge: "Migrar sistema legacy a arquitectura moderna.",
          solution: "Implementación de microservicios y migración gradual de funcionalidades."
        }
      },
      {
        id: 10,
        title: "App de Finanzas Personales",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/207/800/600",
        description: "Aplicación para control de gastos y presupuesto",
        technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
        images: [
          "https://picsum.photos/id/207/800/600",
          "https://picsum.photos/id/208/800/600",
          "https://picsum.photos/id/209/800/600"
        ],
        details: {
          client: "FinanceApp Inc",
          date: "2023",
          challenge: "Desarrollar algoritmos de categorización automática de gastos.",
          solution: "Implementación de ML para clasificación de transacciones."
        }
      },
      {
        id: 11,
        title: "Sistema de Gestión Hospitalaria",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/210/800/600",
        description: "Software para administración de hospitales y clínicas",
        technologies: ["C#", ".NET", "SQL Server", "WPF"],
        images: [
          "https://picsum.photos/id/210/800/600",
          "https://picsum.photos/id/211/800/600",
          "https://picsum.photos/id/212/800/600"
        ],
        details: {
          client: "HealthTech Solutions",
          date: "2022",
          challenge: "Integrar múltiples sistemas legacy y garantizar disponibilidad 24/7.",
          solution: "Arquitectura modular con sistema de respaldo y alta disponibilidad."
        }
      },
      {
        id: 12,
        title: "Plataforma de Streaming",
        category: "web",
        thumbnail: "https://picsum.photos/id/213/800/600",
        description: "Servicio de streaming de contenido multimedia",
        technologies: ["Next.js", "AWS", "Redis", "FFmpeg"],
        images: [
          "https://picsum.photos/id/213/800/600",
          "https://picsum.photos/id/214/800/600",
          "https://picsum.photos/id/215/800/600"
        ],
        details: {
          client: "StreamMedia",
          date: "2023",
          challenge: "Optimizar la entrega de contenido y reducir latencia.",
          solution: "Implementación de CDN y transcodificación adaptativa."
        }
      },
      {
        id: 13,
        title: "App de Reservas de Restaurantes",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/216/800/600",
        description: "Aplicación para reservas y pedidos en restaurantes",
        technologies: ["Flutter", "Node.js", "PostgreSQL"],
        images: [
          "https://picsum.photos/id/216/800/600",
          "https://picsum.photos/id/217/800/600",
          "https://picsum.photos/id/218/800/600"
        ],
        details: {
          client: "DineEasy",
          date: "2023",
          challenge: "Gestionar reservas en tiempo real y evitar conflictos.",
          solution: "Sistema de reservas con confirmación inmediata y lista de espera."
        }
      },
      {
        id: 14,
        title: "Software de Análisis de Datos",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/219/800/600",
        description: "Herramienta de análisis y visualización de datos",
        technologies: ["Python", "Qt", "Pandas", "Matplotlib"],
        images: [
          "https://picsum.photos/id/219/800/600",
          "https://picsum.photos/id/220/800/600",
          "https://picsum.photos/id/221/800/600"
        ],
        details: {
          client: "DataViz Corp",
          date: "2022",
          challenge: "Procesar grandes volúmenes de datos eficientemente.",
          solution: "Implementación de procesamiento paralelo y optimización de memoria."
        }
      },
      {
        id: 15,
        title: "Plataforma IoT",
        category: "web",
        thumbnail: "https://picsum.photos/id/222/800/600",
        description: "Dashboard para monitoreo de dispositivos IoT",
        technologies: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
        images: [
          "https://picsum.photos/id/222/800/600",
          "https://picsum.photos/id/223/800/600",
          "https://picsum.photos/id/224/800/600"
        ],
        details: {
          client: "IoT Solutions",
          date: "2023",
          challenge: "Manejar miles de conexiones simultáneas de dispositivos.",
          solution: "Arquitectura basada en WebSockets y procesamiento en tiempo real."
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
      desktop: 'Desktop'
    },
    projects: [
      {
        id: 1,
        title: "E-commerce Dashboard",
        category: "web",
        thumbnail: "https://picsum.photos/id/180/800/600",
        description: "Administrative dashboard for e-commerce management with real-time analytics",
        technologies: ["Angular", "NestJS", "PostgreSQL", "Docker"],
        images: [
          "https://picsum.photos/id/180/800/600",
          "https://picsum.photos/id/181/800/600",
          "https://picsum.photos/id/182/800/600"
        ],
        details: {
          client: "TechStore Inc.",
          date: "2023",
          url: "https://techstore-dashboard.com",
          challenge: "Create an intuitive interface to manage large volumes of products and orders in real-time.",
          solution: "Implementation of scalable architecture with microservices and cache system to optimize performance."
        }
      },
      {
        id: 2,
        title: "Fitness App",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/183/800/600",
        description: "Mobile application for tracking workout routines and nutrition",
        technologies: ["Ionic", "Angular", "Firebase", "NodeJS"],
        images: [
          "https://picsum.photos/id/183/800/600",
          "https://picsum.photos/id/184/800/600",
          "https://picsum.photos/id/185/800/600"
        ],
        details: {
          client: "FitLife Solutions",
          date: "2023",
          url: "https://fitlife-app.com",
          challenge: "Develop an intuitive application that motivates users to maintain a healthy lifestyle.",
          solution: "Implementation of gamification and reward system to maintain user engagement."
        }
      },
      {
        id: 3,
        title: "Task Management Platform",
        category: "web",
        thumbnail: "https://picsum.photos/id/186/800/600",
        description: "Collaborative project and task management platform",
        technologies: ["React", "Redux", "Express", "MongoDB"],
        images: [
          "https://picsum.photos/id/186/800/600",
          "https://picsum.photos/id/187/800/600",
          "https://picsum.photos/id/188/800/600"
        ],
        details: {
          client: "ProjectPro Inc.",
          date: "2022",
          url: "https://projectpro-platform.com",
          challenge: "Create a platform that simplifies complex project management in distributed teams.",
          solution: "Development of an intuitive drag-and-drop interface with real-time updates."
        }
      },
      {
        id: 4,
        title: "Smart Home Control System",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/189/800/600",
        description: "Desktop application for comprehensive home automation control",
        technologies: ["Electron", "Vue.js", "Python", "MQTT"],
        images: [
          "https://picsum.photos/id/189/800/600",
          "https://picsum.photos/id/190/800/600",
          "https://picsum.photos/id/191/800/600"
        ],
        details: {
          client: "SmartTech Solutions",
          date: "2023",
          challenge: "Develop a unified interface to control multiple IoT devices.",
          solution: "Implementation of modular architecture and MQTT protocol for real-time communication."
        }
      },
      {
        id: 5,
        title: "Inventory Management System",
        category: "web",
        thumbnail: "https://picsum.photos/id/192/800/600",
        description: "Multi-warehouse inventory management system",
        technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
        images: [
          "https://picsum.photos/id/192/800/600",
          "https://picsum.photos/id/193/800/600",
          "https://picsum.photos/id/194/800/600"
        ],
        details: {
          client: "LogisticsPro Corp",
          date: "2023",
          challenge: "Optimize inventory management across multiple locations.",
          solution: "Predictive stock system and order automation."
        }
      },
      {
        id: 6,
        title: "Online Learning Platform",
        category: "web",
        thumbnail: "https://picsum.photos/id/195/800/600",
        description: "LMS with real-time video conferencing and assessment capabilities",
        technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
        images: [
          "https://picsum.photos/id/195/800/600",
          "https://picsum.photos/id/196/800/600",
          "https://picsum.photos/id/197/800/600"
        ],
        details: {
          client: "EduTech Solutions",
          date: "2023",
          url: "https://edutech-platform.com",
          challenge: "Create a scalable educational platform supporting thousands of simultaneous users.",
          solution: "Implementation of serverless architecture and video streaming optimization."
        }
      },
      {
        id: 7,
        title: "Delivery App",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/198/800/600",
        description: "Mobile application for delivery management and real-time tracking",
        technologies: ["Flutter", "Firebase", "Google Maps API"],
        images: [
          "https://picsum.photos/id/198/800/600",
          "https://picsum.photos/id/199/800/600",
          "https://picsum.photos/id/200/800/600"
        ],
        details: {
          client: "FastDelivery",
          date: "2023",
          challenge: "Develop an accurate tracking and delivery driver assignment system.",
          solution: "Implementation of route optimization algorithms and real-time geolocation."
        }
      },
      {
        id: 8,
        title: "POS System",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/201/800/600",
        description: "Point of sale software with inventory management",
        technologies: ["Electron", "React", "SQLite", "Node.js"],
        images: [
          "https://picsum.photos/id/201/800/600",
          "https://picsum.photos/id/202/800/600",
          "https://picsum.photos/id/203/800/600"
        ],
        details: {
          client: "RetailTech",
          date: "2022",
          challenge: "Create an offline-first system with cloud synchronization.",
          solution: "Development of synchronization queue system and conflict handling."
        }
      },
      {
        id: 9,
        title: "Enterprise CRM",
        category: "web",
        thumbnail: "https://picsum.photos/id/204/800/600",
        description: "Customer relationship management system",
        technologies: ["Angular", "Java Spring", "PostgreSQL"],
        images: [
          "https://picsum.photos/id/204/800/600",
          "https://picsum.photos/id/205/800/600",
          "https://picsum.photos/id/206/800/600"
        ],
        details: {
          client: "Business Solutions Corp",
          date: "2023",
          challenge: "Migrate legacy system to modern architecture.",
          solution: "Implementation of microservices and gradual feature migration."
        }
      },
      {
        id: 10,
        title: "Personal Finance App",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/207/800/600",
        description: "Application for expense tracking and budgeting",
        technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
        images: [
          "https://picsum.photos/id/207/800/600",
          "https://picsum.photos/id/208/800/600",
          "https://picsum.photos/id/209/800/600"
        ],
        details: {
          client: "FinanceApp Inc",
          date: "2023",
          challenge: "Develop automatic expense categorization algorithms.",
          solution: "Implementation of ML for transaction classification."
        }
      },
      {
        id: 11,
        title: "Hospital Management System",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/210/800/600",
        description: "Software for hospital and clinic administration",
        technologies: ["C#", ".NET", "SQL Server", "WPF"],
        images: [
          "https://picsum.photos/id/210/800/600",
          "https://picsum.photos/id/211/800/600",
          "https://picsum.photos/id/212/800/600"
        ],
        details: {
          client: "HealthTech Solutions",
          date: "2022",
          challenge: "Integrate multiple legacy systems and ensure 24/7 availability.",
          solution: "Modular architecture with backup system and high availability."
        }
      },
      {
        id: 12,
        title: "Streaming Platform",
        category: "web",
        thumbnail: "https://picsum.photos/id/213/800/600",
        description: "Multimedia content streaming service",
        technologies: ["Next.js", "AWS", "Redis", "FFmpeg"],
        images: [
          "https://picsum.photos/id/213/800/600",
          "https://picsum.photos/id/214/800/600",
          "https://picsum.photos/id/215/800/600"
        ],
        details: {
          client: "StreamMedia",
          date: "2023",
          challenge: "Optimize content delivery and reduce latency.",
          solution: "Implementation of CDN and adaptive transcoding."
        }
      },
      {
        id: 13,
        title: "Restaurant Booking App",
        category: "mobile",
        thumbnail: "https://picsum.photos/id/216/800/600",
        description: "Application for restaurant reservations and orders",
        technologies: ["Flutter", "Node.js", "PostgreSQL"],
        images: [
          "https://picsum.photos/id/216/800/600",
          "https://picsum.photos/id/217/800/600",
          "https://picsum.photos/id/218/800/600"
        ],
        details: {
          client: "DineEasy",
          date: "2023",
          challenge: "Manage real-time reservations and avoid conflicts.",
          solution: "Instant confirmation reservation system with waitlist."
        }
      },
      {
        id: 14,
        title: "Data Analysis Software",
        category: "desktop",
        thumbnail: "https://picsum.photos/id/219/800/600",
        description: "Data analysis and visualization tool",
        technologies: ["Python", "Qt", "Pandas", "Matplotlib"],
        images: [
          "https://picsum.photos/id/219/800/600",
          "https://picsum.photos/id/220/800/600",
          "https://picsum.photos/id/221/800/600"
        ],
        details: {
          client: "DataViz Corp",
          date: "2022",
          challenge: "Process large volumes of data efficiently.",
          solution: "Implementation of parallel processing and memory optimization."
        }
      },
      {
        id: 15,
        title: "IoT Platform",
        category: "web",
        thumbnail: "https://picsum.photos/id/222/800/600",
        description: "Dashboard for IoT device monitoring",
        technologies: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
        images: [
          "https://picsum.photos/id/222/800/600",
          "https://picsum.photos/id/223/800/600",
          "https://picsum.photos/id/224/800/600"
        ],
        details: {
          client: "IoT Solutions",
          date: "2023",
          challenge: "Handle thousands of simultaneous device connections.",
          solution: "WebSocket-based architecture and real-time processing."
        }
      }
    ]
  }
}; 