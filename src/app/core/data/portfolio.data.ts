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
    title: 'Contacto',
    description: 'Ponte en contacto conmigo a través de los siguientes medios...',
    details: {
      email: 'tuemail@ejemplo.com',
      phone: '123-456-7890',
      location: 'Tu Ciudad'
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
  }
}; 