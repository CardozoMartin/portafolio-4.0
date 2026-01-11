// Datos completos de proyectos con toda la información
import bahia from '../assets/img/bahia.png';
import botimg from '../assets/img/botimg.jpg';
import gym from '../assets/img/gym.jpg';
import petqr from '../assets/img/petqr.jpg';
import ventas from '../assets/img/ventas.jpg';
import distrinort from '../assets/img/distrinort.png';
import eco1 from '../assets/img/ecoRed.png';

// Importar imágenes de bahia
import bahia1 from '../assets/img/bahia/1.png';
import bahia2 from '../assets/img/bahia/2.png';
import bahia3 from '../assets/img/bahia/3.png';
import bahia4 from '../assets/img/bahia/4.png';
import bahia5 from '../assets/img/bahia/5.png';

// Importar imágenes de gym
import gym1 from '../assets/img/gym/1.png';
import gym2 from '../assets/img/gym/2.png';
import gym3 from '../assets/img/gym/3.png';
import gym4 from '../assets/img/gym/4.png';

// Importar imágenes de ventas
import ventas1 from '../assets/img/ventas/1.png';
import ventas2 from '../assets/img/ventas/2.png';
import ventas3 from '../assets/img/ventas/3.png';
import ventas4 from '../assets/img/ventas/4.png';
import ventas5 from '../assets/img/ventas/5.png';
import ventas6 from '../assets/img/ventas/6.png';

// Importar imágenes de petsqr
import petsqr1 from '../assets/img/petsqr/1.png';
import petsqr2 from '../assets/img/petsqr/2.png';
import petsqr3 from '../assets/img/petsqr/3.png';
import petsqr4 from '../assets/img/petsqr/4.png';
import petsqr5 from '../assets/img/petsqr/5.png';

// Importar imágenes de bot
import bot1 from '../assets/img/bot/1.jpg';
import bot2 from '../assets/img/bot/2.jpg';
import bot3 from '../assets/img/bot/3.jpg';
import bot4 from '../assets/img/bot/4.jpg';

// Importar imágenes de distrinort
import distri1 from '../assets/img/distriNort/1.png';
import distri2 from '../assets/img/distriNort/2.png';
import distri3 from '../assets/img/distriNort/3.png';
import distri4 from '../assets/img/distriNort/4.png';
import distri5 from '../assets/img/distriNort/5.png';

// Importar imagen de changaya principal
import changaya from '../assets/img/changaya.png';

// Importar imágenes de changaya
import changaya1 from '../assets/img/changaya/screen.png';
import changaya2 from '../assets/img/changaya/screen1.png';
import changaya3 from '../assets/img/changaya/screen2.png';
import changaya4 from '../assets/img/changaya/screen3.png';
import changaya5 from '../assets/img/changaya/screen4.png';
import changaya6 from '../assets/img/changaya/screen5.png';
import changaya7 from '../assets/img/changaya/screen6.png';

export const projectsData = [
  {
    id: 1,
    image: bahia,
    title: "Bahía Joyería - E-commerce Premium",
    shortDescription: "Plataforma completa de comercio electrónico especializada en joyería de alta gama",
    fullDescription: "Bahía Joyería es una plataforma de e-commerce completa desarrollada desde cero para el mercado de joyería premium. Integra sistemas de pago seguros, gestión de inventario en tiempo real y una experiencia de usuario elegante y fluida.",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "MercadoPago API", "Express", "Tailwind CSS"],
    features: [
      "🛒 Carrito de compras avanzado con persistencia",
      "💳 Integración completa con Mercado Pago",
      "📦 Sistema de gestión de pedidos y tracking",
      "🔐 Autenticación y autorización segura con JWT",
      "📱 Diseño responsive y adaptable a todos los dispositivos",
      "🖼️ Galería de imágenes con zoom y lightbox",
      "⭐ Sistema de reseñas y valoraciones",
      "🔍 Búsqueda y filtros avanzados por categoría y precio"
    ],
    challenges: [
      "Implementación de un sistema de pagos seguro y confiable",
      "Optimización de rendimiento con más de 500 productos",
      "Manejo de estados complejos en el carrito de compras"
    ],
    results: [
      "Incremento del 150% en conversiones vs. sistema anterior",
      "Tiempo de carga promedio de 1.2 segundos",
      "95% de satisfacción en encuestas de usuarios"
    ],
    githubUrl: "https://github.com/CardozoMartin/bahia.-front",
    liveUrl: "https://bahiacc.netlify.app/",
    images: [bahia, bahia1, bahia2, bahia3, bahia4, bahia5],
    size: "large",
    color: "from-purple-500/20 to-pink-500/20",
    duration: "3 meses",
    role: "Full Stack Developer",
    year: "2024"
  },
  {
    id: 2,
    image: distrinort,
    title: "DistriNort - ERP Empresarial",
    shortDescription: "Sistema completo de gestión empresarial con múltiples módulos integrados",
    fullDescription: "DistriNort es un ERP (Enterprise Resource Planning) completo diseñado para optimizar la gestión de una empresa distribuidora. Incluye módulos de inventario, ventas, compras, finanzas y recursos humanos.",
    category: "Sistema",
    technologies: ["React", "Express", "PostgreSQL", "Node.js", "Redux", "Material-UI"],
    features: [
      "📊 Dashboard analítico con métricas en tiempo real",
      "📦 Gestión completa de inventario y stock",
      "💰 Módulo de facturación y contabilidad",
      "👥 Gestión de clientes y proveedores",
      "📈 Reportes personalizables y exportables",
      "🔔 Sistema de notificaciones y alertas",
      "👨‍💼 Control de usuarios y permisos por rol",
      "📱 Panel móvil para supervisores"
    ],
    challenges: [
      "Arquitectura escalable para manejar grandes volúmenes de datos",
      "Implementación de reportes complejos con múltiples variables",
      "Sincronización en tiempo real entre módulos"
    ],
    results: [
      "Reducción del 40% en tiempo de procesamiento de pedidos",
      "Mejora del 60% en control de inventario",
      "Automatización de 80% de procesos manuales"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [distrinort, distri1, distri2, distri3, distri4, distri5],
    size: "large",
    color: "from-blue-500/20 to-cyan-500/20",
    duration: "6 meses",
    role: "Lead Developer",
    year: "2024"
  },
  {
    id: 3,
    image: petqr,
    title: "PetsQR - App de Gestión de Mascotas",
    shortDescription: "Aplicación móvil para gestionar información de mascotas con tecnología QR",
    fullDescription: "PetsQR es una aplicación móvil innovadora que permite a los dueños de mascotas gestionar toda la información de sus animales mediante códigos QR. Incluye historial médico, vacunas, y sistema de mascotas perdidas.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "QR Code", "Expo", "React Navigation"],
    features: [
      "🐕 Perfiles completos de mascotas con fotos",
      "📱 Generación de códigos QR únicos",
      "💉 Historial médico y control de vacunas",
      "🔔 Recordatorios de citas veterinarias",
      "🗺️ Sistema de mascotas perdidas con geolocalización",
      "📸 Galería de fotos y momentos especiales",
      "👥 Compartir información con veterinarios",
      "🏥 Directorio de veterinarias cercanas"
    ],
    challenges: [
      "Sincronización offline-first para funcionar sin internet",
      "Optimización de escaneo de QR en diferentes condiciones de luz",
      "Manejo eficiente de imágenes en dispositivos móviles"
    ],
    results: [
      "Más de 1,000 mascotas registradas en el primer mes",
      "15 mascotas perdidas recuperadas usando la app",
      "4.8 estrellas en Play Store"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [petqr, petsqr1, petsqr2, petsqr3, petsqr4, petsqr5],
    size: "medium",
    color: "from-green-500/20 to-emerald-500/20",
    duration: "4 meses",
    role: "Mobile Developer",
    year: "2023"
  },
  {
    id: 4,
    image: gym,
    title: "GymFlow - Sistema de Gestión de Gimnasio",
    shortDescription: "Plataforma completa para administrar gimnasios, membresías y rutinas",
    fullDescription: "GymFlow es un sistema integral para la gestión de gimnasios que incluye control de membresías, planes de entrenamiento personalizados, seguimiento de progreso y gestión financiera.",
    category: "Sistema",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Socket.io"],
    features: [
      "💪 Gestión de membresías y planes",
      "📅 Sistema de reservas de clases",
      "🏋️ Planes de entrenamiento personalizados",
      "📊 Seguimiento de progreso con gráficos",
      "💳 Pagos automatizados y recordatorios",
      "👥 Control de acceso con código QR",
      "📱 App móvil para usuarios",
      "📈 Dashboard para entrenadores"
    ],
    challenges: [
      "Sistema de reservas en tiempo real sin conflictos",
      "Generación automática de rutinas basadas en objetivos",
      "Integración con hardware de control de acceso"
    ],
    results: [
      "3 gimnasios usando el sistema activamente",
      "Reducción del 70% en trabajo administrativo",
      "Incremento del 30% en renovación de membresías"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [gym, gym1, gym2, gym3, gym4],
    size: "medium",
    color: "from-orange-500/20 to-red-500/20",
    duration: "3 meses",
    role: "Full Stack Developer",
    year: "2023"
  },
  {
    id: 5,
    image: ventas,
    title: "Sistema POS - Punto de Venta",
    shortDescription: "Sistema completo de punto de venta con control de inventario",
    fullDescription: "Sistema POS robusto diseñado para pequeñas y medianas empresas. Incluye facturación, control de inventario, reportes de ventas y gestión de múltiples sucursales.",
    category: "Sistema",
    technologies: ["React", "Express", "MySQL", "Node.js", "PDF-lib", "Redux"],
    features: [
      "🛒 Interfaz de venta rápida e intuitiva",
      "📄 Generación automática de facturas PDF",
      "📦 Control de inventario en tiempo real",
      "💰 Múltiples métodos de pago",
      "👥 Gestión de clientes y proveedores",
      "📊 Reportes de ventas y estadísticas",
      "🏪 Soporte para múltiples sucursales",
      "💳 Integración con impresoras térmicas"
    ],
    challenges: [
      "Sincronización de inventario entre sucursales",
      "Sistema offline-first para evitar pérdida de ventas",
      "Optimización para hardware de bajo rendimiento"
    ],
    results: [
      "10 negocios implementaron el sistema",
      "Velocidad de venta promedio: 30 segundos",
      "0% de pérdida de transacciones por fallas"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [ventas, ventas1, ventas2, ventas3, ventas4, ventas5, ventas6],
    size: "small",
    color: "from-indigo-500/20 to-purple-500/20",
    duration: "2 meses",
    role: "Backend Lead",
    year: "2024"
  },
  {
    id: 6,
    image: botimg,
    title: "AI ChatBot Inteligente",
    shortDescription: "Bot conversacional con inteligencia artificial para atención al cliente",
    fullDescription: "Chatbot avanzado desarrollado con tecnologías de IA que puede responder preguntas, procesar pedidos y resolver problemas de clientes de manera autónoma.",
    category: "IA",
    technologies: ["Python", "OpenAI GPT", "Flask", "Redis", "Natural Language Processing"],
    features: [
      "🤖 Procesamiento de lenguaje natural avanzado",
      "💬 Respuestas contextuales inteligentes",
      "📚 Base de conocimiento personalizable",
      "🔄 Aprendizaje continuo de conversaciones",
      "🌐 Soporte multiidioma",
      "📊 Analytics de conversaciones",
      "🔗 Integración con WhatsApp y Telegram",
      "⚡ Respuesta en menos de 1 segundo"
    ],
    challenges: [
      "Entrenamiento del modelo con datos específicos del negocio",
      "Manejo de consultas ambiguas y fuera de contexto",
      "Optimización de costos de API de OpenAI"
    ],
    results: [
      "Reducción del 60% en tickets de soporte",
      "Satisfacción del cliente: 4.5/5",
      "Ahorro de $2,000 mensuales en atención"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [botimg, bot1, bot2, bot3, bot4],
    size: "small",
    color: "from-yellow-500/20 to-amber-500/20",
    duration: "2 meses",
    role: "AI Developer",
    year: "2024"
  },
  {
    id: 7,
    image: eco1,
    title: "EcoRed - Plataforma Ambiental",
    shortDescription: "Plataforma de gestión ambiental y sostenibilidad empresarial",
    fullDescription: "EcoRed es una plataforma web diseñada para ayudar a empresas a gestionar su impacto ambiental, medir su huella de carbono y generar reportes de sostenibilidad.",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "Express", "Chart.js"],
    features: [
      "🌱 Calculadora de huella de carbono",
      "📊 Dashboard de métricas ambientales",
      "📈 Reportes de sostenibilidad automatizados",
      "🎯 Metas y objetivos de reducción",
      "💡 Recomendaciones personalizadas",
      "🏆 Sistema de certificaciones",
      "📱 App móvil para registro de datos",
      "🌍 Comparativa con estándares internacionales"
    ],
    challenges: [
      "Cálculos complejos de emisiones multi-variable",
      "Visualización de datos ambientales en tiempo real",
      "Integración con APIs de datos climáticos"
    ],
    results: [
      "20 empresas monitoreando su impacto",
      "Reducción promedio del 25% en emisiones",
      "3 empresas certificadas gracias a la plataforma"
    ],
    githubUrl: "https://github.com/CardozoMartin",
    liveUrl: "#",
    images: [eco1],
    size: "medium",
    color: "from-teal-500/20 to-green-500/20",
    duration: "4 meses",
    role: "Full Stack Developer",
    year: "2023"
  },
  {
    id: 9,
    image: changaya,
    title: "Changaya - App de Inicio de Google",
    shortDescription: "Aplicación móvil con inicio de Google integrado y autenticación Supabase",
    fullDescription: "Changaya es una aplicación móvil desarrollada con React Native que implementa inicio de sesión con Google y autenticación mediante Supabase. La app utiliza tecnologías modernas de gestión de estado y formularios para proporcionar una experiencia de usuario fluida y responsiva.",
    category: "Mobile",
    technologies: ["React Native", "Google Sign-in", "Supabase", "TanStack Query", "React Hook Form", "Zustand", "Express", "TypeScript", "MongoDB", "Mongoose", "Nodemailer", "JWT"],
    features: [
      "🔐 Autenticación con Google Sign-in integrado",
      "🔑 Sistema seguro de autenticación con JWT",
      "📱 Interfaz nativa responsiva",
      "🚀 Gestión de estado con Zustand",
      "📋 Formularios validados con React Hook Form",
      "🔄 Sincronización de datos con TanStack Query",
      "📧 Sistema de notificaciones por email con Nodemailer",
      "💾 Persistencia de datos en MongoDB"
    ],
    challenges: [
      "Integración segura de Google Sign-in en React Native",
      "Manejo eficiente del estado global con Zustand",
      "Sincronización de datos en tiempo real con el backend"
    ],
    results: [
      "Experiencia de autenticación fluida",
      "Carga de datos optimizada con TanStack Query",
      "Sistema de notificaciones automático y confiable"
    ],
    githubUrl: "https://github.com/CardozoMartin/changaya-front",
    liveUrl: "#",
    images: [changaya, changaya1, changaya2, changaya3, changaya4, changaya5, changaya6, changaya7],
    size: "large",
    color: "from-cyan-500/20 to-blue-500/20",
    duration: "2 meses",
    role: "Full Stack Developer",
    year: "2024"
  }
];
