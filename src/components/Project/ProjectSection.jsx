import ProjectCard from "./ProjectCard";
import bahia from '../../assets/img/bahia.png'
import botimg from '../../assets/img/botimg.jpg'
import gym from '../../assets/img/gym.jpg'
import petqr from '../../assets/img/petqr.jpg'
import ventas from '../../assets/img/ventas.jpg'
import distrinort from '../../assets/img/distrinort.png'
import bahia1 from '../../assets/img/bahia/1.png';
import bahia2 from '../../assets/img/bahia/2.png';
import bahia3 from '../../assets/img/bahia/3.png';
import bahia4 from '../../assets/img/bahia/4.png';
import bahia5 from '../../assets/img/bahia/5.png';
import gym1 from '../../assets/img/gym/1.png';
import gym2 from '../../assets/img/gym/2.png';
import gym3 from '../../assets/img/gym/3.png';
import gym4 from '../../assets/img/gym/4.png';
import ventas1 from '../../assets/img/ventas/1.png';
import ventas2 from '../../assets/img/ventas/2.png';
import ventas3 from '../../assets/img/ventas/3.png';
import ventas4 from '../../assets/img/ventas/4.png';
import ventas5 from '../../assets/img/ventas/5.png';
import ventas6 from '../../assets/img/ventas/6.png';
import petsqr1 from '../../assets/img/petsqr/1.png';
import petsqr2 from '../../assets/img/petsqr/2.png';
import petsqr3 from '../../assets/img/petsqr/3.png';
import petsqr4 from '../../assets/img/petsqr/4.png';
import petsqr5 from '../../assets/img/petsqr/5.png';
import petsqr6 from '../../assets/img/petsqr/6.png';
import petsqr7 from '../../assets/img/petsqr/7.png';
import petsqr8 from '../../assets/img/petsqr/8.png';
import petsqr9 from '../../assets/img/petsqr/9.png';
import petsqr10 from '../../assets/img/petsqr/10.png';
import bot1 from '../../assets/img/bot/1.jpg';
import bot2 from '../../assets/img/bot/2.jpg';
import bot3 from '../../assets/img/bot/3.jpg';
import bot4 from '../../assets/img/bot/4.jpg';
//importaciones iguales hasta el numero 18
import distri1 from '../../assets/img/distriNort/1.png';
import distri2 from '../../assets/img/distriNort/2.png';
import distri3 from '../../assets/img/distriNort/3.png';
import distri4 from '../../assets/img/distriNort/4.png';
import distri5 from '../../assets/img/distriNort/5.png';
import distri6 from '../../assets/img/distriNort/6.png';
import distri7 from '../../assets/img/distriNort/7.png';
import distri8 from '../../assets/img/distriNort/8.png';
import distri9 from '../../assets/img/distriNort/9.png';
import distri10 from '../../assets/img/distriNort/10.png';
import distri11 from '../../assets/img/distriNort/11.png';
import distri12 from '../../assets/img/distriNort/12.png';
import distri13 from '../../assets/img/distriNort/13.png';
import distri14 from '../../assets/img/distriNort/14.png';
import distri15 from '../../assets/img/distriNort/15.png';
import distri16 from '../../assets/img/distriNort/16.png';
import distri17 from '../../assets/img/distriNort/17.jpg';
import distri18 from '../../assets/img/distriNort/18.jpg';
import distri19 from '../../assets/img/distriNort/19.jpg';
import distri20 from '../../assets/img/distriNort/20.jpg';
import distri21 from '../../assets/img/distriNort/21.jpg';
import distri22 from '../../assets/img/distriNort/22.jpg';
import distri23 from '../../assets/img/distriNort/23.jpg';
import eco2 from '../../assets/img/ecored/1.png'
import eco1 from '../../assets/img/ecoRed.png'














const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: bahia,
      title: "E-commerce Joyería Plataforma",
      shortDescription: "Plataforma completa de comercio electrónico especializada en joyería",
      description: "Plataforma completa de comercio electrónico especializada en joyería, con integración de Mercado Pago para procesamiento seguro de pagos. Incluye catálogo de productos, carrito de compras y gestión de pedidos.",
      detailedDescription: `
        Esta plataforma de e-commerce fue desarrollada específicamente para el mercado de joyería, 
        ofreciendo una experiencia de compra elegante y segura. El proyecto integra múltiples 
        funcionalidades avanzadas para satisfacer las necesidades tanto de administradores como de clientes.

        La arquitectura del sistema está diseñada para manejar un alto volumen de transacciones 
        mientras mantiene la seguridad como prioridad principal. Cada componente ha sido optimizado 
        para ofrecer la mejor experiencia de usuario posible.
      `,
      githubUrl: "https://github.com/CardozoMartin/bahia.-front",
      liveUrl: "https://joyeria-plataforma.vercel.app",
      technologies: ["React", "Node.js", "MongoDB", "MercadoPago API"],
      features: [
        "Sistema de autenticación y autorización completo",
        "Catálogo de productos con filtros avanzados",
        "Carrito de compras persistente",
        "Integración completa con Mercado Pago",
        "Panel de administración para gestión de inventario",
        "Sistema de reviews y calificaciones",
        "Notificaciones por email automatizadas",
        "Responsive design para todos los dispositivos"
      ],
      techStack: {
        frontend: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "MongoDB", "JWT"],
        integrations: ["MercadoPago API", "Nodemailer", "Cloudinary"],
        tools: ["Git", "Docker", "Vercel", "MongoDB Atlas"]
      },
      images: [
        {
          url: bahia1,
          title: "Página Principal",
          description: "Vista principal del e-commerce con productos destacados y navegación intuitiva"
        },
        {
          url: bahia2,
          title: "Catálogo de Productos",
          description: "Sistema de filtros avanzado y vista de productos con detalles completos"
        },
        {
          url: bahia3,
          title: "Carrito de Compras",
          description: "Experiencia de checkout optimizada con múltiples opciones de pago"
        },
        {
          url: bahia4,
          title: "Panel de Administración",
          description: "Dashboard completo para gestión de productos, pedidos y usuarios"
        },
        {
          url: bahia5,
          title: "Panel de Administración",
          description: "Dashboard completo para gestión de productos, pedidos y usuarios"
        }
      ],
      videos: [
        {
          url: "",
          title: "Demo Completa",
          description: "Recorrido completo por todas las funcionalidades de la plataforma"
        }
      ],
      status: "Completado",
      duration: "2 meses",
      team: "1 desarrolladores"
    },
    {
      id: 2,
      image: botimg,
      title: "Bot de Ventas Automatizado",
      shortDescription: "Sistema automatizado de ventas para servidores VPS",
      description: "Sistema automatizado de ventas para servidores VPS con funcionalidades de prueba gratuita. Integra Mercado Pago para generar links de pago dinámicos y gestionar transacciones de forma autónoma.",
      detailedDescription: `
        Bot inteligente diseñado para automatizar completamente el proceso de ventas de servidores VPS. 
        El sistema maneja desde la consulta inicial del cliente hasta la entrega del producto final.

        Implementa un sistema de pruebas gratuitas que permite a los usuarios evaluar el servicio antes 
        de realizar la compra. La integración con Mercado Pago garantiza transacciones seguras y 
        procesamiento automático de pagos.
      `,
      githubUrl: "https://github.com/CardozoMartin/distrinort_bot",
      liveUrl: "https://bot-ventas-demo.vercel.app",
      technologies: ["Javascript", "Whatsapp-web.js", "MercadoPago"],
      features: [
        "Conversación automatizada con clientes",
        "Sistema de pruebas gratuitas de 24 horas",
        "Integración completa con Mercado Pago",
        "Generación automática de credenciales de acceso",
        "Panel de administración para monitoreo",
        "Gestión automática de renovaciones",
        
      ],
      techStack: {
        backend: ["node.js", "Rest Api", "MongoDB"],
        integrations: ["Whatsappweb-js", "MercadoPago API"],
      },
      images: [
        {
          url: bot1,
          title: "Interfaz del Bot",
          description: "Vista de la conversación automatizada con el cliente"
        },
        {
          url: bot2,
          title: "Panel de Control",
          description: "Dashboard para monitoreo de ventas y gestión de clientes"
        },
        {
          url: bot3,
          title: "Panel de Control",
          description: "Dashboard para monitoreo de ventas y gestión de clientes"
        },
        {
          url: bot4,
          title: "Panel de Control",
          description: "Dashboard para monitoreo de ventas y gestión de clientes"
        }
      ],
      videos: [
        {
          url: "",
          title: "Demo del Bot",
          description: "Demostración completa del flujo de ventas automatizado"
        }
      ],
      status: "Completado",
      duration: "1 meses",
      team: "1 desarrollador"
    },
    {
      id: 3,
      image: gym,
      title: "GymManager - Dashboard",
      shortDescription: "Aplicación web completa para la gestión integral de gimnasios",
      description: "Aplicación web completa para la gestión integral de gimnasios. Permite administrar membresías, horarios, equipos y seguimiento de usuarios con dashboard analítico en tiempo real.",
      detailedDescription: `
        Sistema integral de gestión para gimnasios que digitaliza y automatiza todos los procesos 
        operativos. Desde el registro de nuevos miembros hasta el seguimiento de rutinas y progreso.

        El dashboard analítico proporciona insights valiosos sobre el rendimiento del negocio, 
        ocupación de instalaciones y satisfacción de los clientes, permitiendo tomar decisiones 
        basadas en datos reales.
      `,
      githubUrl: "https://github.com/CardozoMartin/Gym-Front",
      liveUrl: "https://gym-manager-demo.vercel.app",
      technologies: ["HTML", "CSS","JavaScript","Node.Js","MongoDB"],
      features: [
        "Gestión completa de membresías y suscripciones",
        "Sistema de reservas para clases y equipos",
        "Dashboard analítico en tiempo real",
        "Seguimiento de rutinas y progreso de usuarios",
        "Gestión de instructores y horarios",
        "Sistema de pagos y facturación",
      ],
      techStack: {
        frontend: ["HTML", "CSS", "Boostrap"],
        backend: ["Node.js", "Express", "MongoDB"],
        integrations: ["Netlify", "Render"],

      },
      images: [
        {
          url: gym1,
          title: "Dashboard Principal",
          description: "Vista general con métricas clave y análisis en tiempo real"
        },
        {
          url: gym2,
          title: "Gestión de Miembros",
          description: "Sistema completo para administrar membresías y perfiles"
        },
        {
          url: gym3,
          title: "Gestión de Miembros",
          description: "Sistema completo para administrar membresías y perfiles"
        },
        {
          url: gym4,
          title: "Gestión de Miembros",
          description: "Sistema completo para administrar membresías y perfiles"
        }
      ],
      videos: [
        {
          url: "",
          title: "Tour del Sistema",
          description: "Recorrido completo por todas las funcionalidades de GymManager"
        }
      ],
      status: "Desarrollada",
      duration: "1 meses",
      team: "1 desarrolladores"
    },
    {
      id: 4,
      image: petqr,
      title: "PetSafe - Plataforma QR",
      shortDescription: "Innovadora plataforma para el registro y seguimiento de mascotas",
      description: "Innovadora plataforma para el registro y seguimiento de mascotas mediante códigos QR únicos. Permite crear perfiles detallados y facilita la recuperación de mascotas perdidas.",
      detailedDescription: `
        Plataforma innovadora que utiliza tecnología QR para crear un sistema de identificación 
        único para mascotas. Cada mascota obtiene un perfil digital completo con información 
        médica, de contacto y fotografías.

        El sistema facilita significativamente la recuperación de mascotas perdidas, ya que 
        cualquier persona puede escanear el código QR y acceder inmediatamente a la información 
        de contacto del dueño.
      `,
      githubUrl: "https://github.com/CardozoMartin/petsqr2.0",
      liveUrl: "https://petsafe-qr.vercel.app",
      technologies: ["Reactjs", "Node.Js","Express","MongoDB"],
      features: [
        "Generación de códigos QR únicos por mascota",
        "Perfiles detallados con fotos y información médica",
        "Sistema de alerta para mascotas perdidas",
        "Mapa de ubicación de últimos avistamientos",
        "App móvil para escaneo rápido"
      ],
      techStack: {
        frontend: ["ReactJs", "Boostrap", "BoostrapIcons"],
        backend: ["Express", "JavaScript"],
        integrations: ["Google Maps API", "QR Code Generator", "Push Notifications"],
        tools: ["Render", "Netifly"]
      },
      images: [
        {
          url: petsqr1,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
        {
          url: petsqr2,
          title: "Mapa de Avistamientos",
          description: "Sistema de geolocalización para mascotas perdidas"
        },
         {
          url: petsqr3,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr4,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr5,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr6,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr7,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr8,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr9,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
         {
          url: petsqr10,
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
      ],
      videos: [
        {
          url: "",
          title: "Como Funciona PetSafe",
          description: "Explicación del proceso de registro y recuperación"
        }
      ],
      status: "Completado",
      duration: "2.5 meses",
      team: "1 desarrolladores"
    },
    {
      id: 5,
      image: ventas,
      title: "SalesPoint - App de Ventas",
      shortDescription: "Sistema completo de punto de venta para PyMEs",
      description: "Sistema completo de punto de venta diseñado para pequeñas y medianas empresas. Gestiona inventario, procesa ventas, genera reportes y mantiene historial de clientes.",
      detailedDescription: `
        Solución integral de punto de venta diseñada específicamente para pequeñas y medianas empresas. 
        El sistema optimiza todos los aspectos del proceso de venta y gestión de inventario.

        Con interfaz intuitiva y funcionalidades robustas, SalesPoint permite a los comerciantes 
        enfocarse en atender a sus clientes mientras el sistema maneja automáticamente el control 
        de stock, facturación y reportes financieros.
      `,
      githubUrl: "https://github.com/CardozoMartin/frontdeVentasProductos",
      liveUrl: "https://salespoint-demo.vercel.app",
      technologies: ["HTML", "CSS", "JavaScript", "Express", "MySQL"],
      features: [
        "Procesamiento rápido de ventas",
        "Gestión automática de inventario",
        "Sistema de fidelización de clientes",
        "Reportes financieros detallados",
        "Impresión de tickets y facturas",
        
        
      ],
      techStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: ["Express", "MySQL", "JavaScript"],
        tools: ["Netifly", "Render"]
      },
      images: [
        {
          url: ventas1,
          title: "Interfaz de Ventas",
          description: "Pantalla principal para procesamiento de ventas"
        },
        {
          url: ventas2,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
         {
          url: ventas3,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
         {
          url: ventas4,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: ventas5,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: ventas6,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        }
      ],
      videos: [
        {
          url: "",
          title: "SalesPoint en Acción",
          description: "Demostración del flujo completo de ventas"
        }
      ],
      status: "Completado",
      duration: "1 meses",
      team: "1 desarrolladores"
    },
     {
      id: 5,
      image: distrinort,
      title: "Distri Nort - App de Pedidos",
      shortDescription: "Sistema onmicanal para pedidos",
      description: "Sistema creado para gestionar pedidos de manera eficiente. Abarcando multiples canales de venta. Bot de WhatsApp integrado. Pedidos por via web tambien pedidos de forma presencial en la tienda con sistema de notificaciones para mantener informado al cliente.",
      detailedDescription: `
        Sistema para facilitar la toma de pedidos mediante todos los canales de forma automatica pedidos en tiempo real por canales como whatsapp, web y en tienda. creando historial para todos los clientes reportes de ventas diarios y mensuales informacion de productos en stock y validando cada venta para no vender productos que no estan disponibles.
        Tambien agregamos un sistema de automatizacion por medio del canal telegram con N8N automatizando consultas para los administradores sin ingresar al sistema de productos con bajo stock pedidos realizados pedidos pendientes ventas realizadas cuanto se recaudo en el dia
      `,
      githubUrl: "https://github.com/CardozoMartin/distri-back",
      liveUrl: "https://admindistrinort.netlify.app/dashboard",
      technologies: ["React", "Tailwind", "JavaScript", "Express", "MongoDB","WebSocket","TypeScript","WhatsAppWeb.js","Nodemailer","Multer","Zustand"],
      features: [
        "Procesamiento rápido de ventas",
        "Gestión automática de inventario",
        "Sistema de fidelización de clientes",
        "Reportes financieros detallados",
        "Impresión de tickets y facturas",
        
        
      ],
      techStack: {
        frontend: ["React", "Tailwind", "JavaScript"],
        backend: ["Express", "MongoDB", "TypeScript","WebSocket","Nodemailer","WhatsAppWeb.js","Multer"],
        tools: ["Netifly", "Render"]
      },
      images: [
        {
          url: distri1,
          title: "Interfaz de Ventas",
          description: "Pantalla principal para procesamiento de ventas"
        },
        {
          url: distri2,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
         {
          url: distri3,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
         {
          url: distri4,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri5,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri6,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri7,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri8,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri9,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri10,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri11,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri12,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri13,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri14,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri15,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri16,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri17,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri18,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri19,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri20,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri21,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri22,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },
        {
          url: distri23,
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        },

      ],
      videos: [
        {
          url: "",
          title: "DistriNort - Sistema omnicanal",
          description: "Demostración del flujo completo de ventas"
        }
      ],
      status: "Completado",
      duration: "3.5 meses",
      team: "1 desarrolladores"
    },
     {
      id: 7,
      image: eco1,
      title: "EcoRed",
      shortDescription: "Plataforma mobile para centros de reciclaje, reportes de basurales, gestion de residuos y mapeo de recolecion de basura",
      description: "Un sistema web diseñado para facilitar la gestión de residuos y la promoción del reciclaje en centros urbanos.",
      detailedDescription: `
        Esta app mobile trata de concientisar en el reciclaje y la correcta disposición de residuos. Tambien tendra un sistema de mapeo de recolectora de basura de horarios y dias para sacar la basura. Cuenta con otro sistema de repoortes de basurales o informes que arruinen el medio ambiente esta app se esta diseñando para presentar en el proyecto de ideas metropolitanada de la fundacion Ibain
      `,
      githubUrl: "https://www.figma.com/design/hmcbcDc4bPzwz9S0FoRkIQ/Untitled?node-id=0-1&p=f&t=ONVX3ne02xkaXdhV-0",
      liveUrl: "https://www.figma.com/design/hmcbcDc4bPzwz9S0FoRkIQ/Untitled?node-id=0-1&p=f&t=ONVX3ne02xkaXdhV-0",
      technologies: ["Reactjs", "Node.Js","Express","MongoDB"],
      features: [
        
      ],
      techStack: {
        frontend: ["React Native"],
        backend: ["Express", "TypeScript","PostgresSQL"],
        integrations: ["Google Maps API", "QR Code Generator", "Push Notifications"],
        tools: ["Render", "Netifly"]
      },
      images: [
        {
          url: eco2,
          title: "Muck Up de la app",
          description: "Vista del de como podria ir quedando las pantallas"
        },
       
      ],
      videos: [
        {
          url: "",
          title: "Como funcionara EcoRed",
          description: "Explicación del proceso de registro y recuperación"
        }
      ],
      status: "En Planeamiento",
      duration: "----",
      team: "No definido desarrolladores"
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Mis Proyectos
        </h2>
        <p className="text-[#9cabba] text-lg max-w-2xl mx-auto px-4">
          Explora una selección de mis proyectos más destacados, desde aplicaciones web hasta sistemas automatizados
        </p>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;