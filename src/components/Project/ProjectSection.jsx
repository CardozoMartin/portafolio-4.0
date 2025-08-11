import ProjectCard from "./ProjectCard";
import bahia from '../../assets/img/bahia.png'
import botimg from '../../assets/img/botimg.jpg'
import gym from '../../assets/img/gym.jpg'
import petqr from '../../assets/img/petqr.jpg'
import ventas from '../../assets/img/ventas.jpg'

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
      githubUrl: "https://github.com/tuusuario/ecommerce-joyeria",
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
          url: "/assets/img/bahia-1.jpg",
          title: "Página Principal",
          description: "Vista principal del e-commerce con productos destacados y navegación intuitiva"
        },
        {
          url: "/assets/img/bahia-2.jpg",
          title: "Catálogo de Productos",
          description: "Sistema de filtros avanzado y vista de productos con detalles completos"
        },
        {
          url: "/assets/img/bahia-3.jpg",
          title: "Carrito de Compras",
          description: "Experiencia de checkout optimizada con múltiples opciones de pago"
        },
        {
          url: "/assets/img/bahia-4.jpg",
          title: "Panel de Administración",
          description: "Dashboard completo para gestión de productos, pedidos y usuarios"
        }
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Demo Completa",
          description: "Recorrido completo por todas las funcionalidades de la plataforma"
        }
      ],
      status: "Completado",
      duration: "3 meses",
      team: "2 desarrolladores"
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
      githubUrl: "https://github.com/tuusuario/bot-ventas-vps",
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
          url: "/assets/img/bot-1.jpg",
          title: "Interfaz del Bot",
          description: "Vista de la conversación automatizada con el cliente"
        },
        {
          url: "/assets/img/bot-2.jpg",
          title: "Panel de Control",
          description: "Dashboard para monitoreo de ventas y gestión de clientes"
        }
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
      githubUrl: "https://github.com/tuusuario/gym-dashboard",
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
          url: "/assets/img/gym-1.jpg",
          title: "Dashboard Principal",
          description: "Vista general con métricas clave y análisis en tiempo real"
        },
        {
          url: "/assets/img/gym-2.jpg",
          title: "Gestión de Miembros",
          description: "Sistema completo para administrar membresías y perfiles"
        }
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
      githubUrl: "https://github.com/tuusuario/pet-qr-platform",
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
          url: "/assets/img/pet-1.jpg",
          title: "Perfil de Mascota",
          description: "Vista del perfil completo con información y código QR"
        },
        {
          url: "/assets/img/pet-2.jpg",
          title: "Mapa de Avistamientos",
          description: "Sistema de geolocalización para mascotas perdidas"
        }
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
      githubUrl: "https://github.com/tuusuario/salespoint-app",
      liveUrl: "https://salespoint-demo.vercel.app",
      technologies: ["Angular", "Laravel", "MySQL"],
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
          url: "/assets/img/sales-1.jpg",
          title: "Interfaz de Ventas",
          description: "Pantalla principal para procesamiento de ventas"
        },
        {
          url: "/assets/img/sales-2.jpg",
          title: "Dashboard de Reportes",
          description: "Análisis detallado de ventas y rendimiento"
        }
      ],
      videos: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "SalesPoint en Acción",
          description: "Demostración del flujo completo de ventas"
        }
      ],
      status: "Completado",
      duration: "3.5 meses",
      team: "2 desarrolladores"
    }
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