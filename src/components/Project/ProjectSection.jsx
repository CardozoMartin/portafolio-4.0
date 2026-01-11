import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";
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
import changaya from '../../assets/img/changaya.png'
import changaya1 from '../../assets/img/changaya/screen.png';
import changaya2 from '../../assets/img/changaya/screen1.png';
import changaya3 from '../../assets/img/changaya/screen2.png';
import changaya4 from '../../assets/img/changaya/screen3.png';
import changaya5 from '../../assets/img/changaya/screen4.png';
import changaya6 from '../../assets/img/changaya/screen5.png';
import changaya7 from '../../assets/img/changaya/screen6.png';














const ProjectsSection = ({ showAll = false }) => {
  const [hoveredId, setHoveredId] = useState(null);
  
  // Proyectos Destacados - Top 3 mejores proyectos
  const featuredProjects = [
    {
      id: 2,
      image: distrinort,
      title: "Distri Nort - App de Pedidos",
      shortDescription: "Sistema omnicanal para pedidos",
      description: "Sistema creado para gestionar pedidos de manera eficiente. Abarcando multiples canales de venta. Bot de WhatsApp integrado. Pedidos por via web tambien pedidos de forma presencial en la tienda con sistema de notificaciones para mantener informado al cliente.",
      detailedDescription: `
        Sistema para facilitar la toma de pedidos mediante todos los canales de forma automatica pedidos en tiempo real por canales como whatsapp, web y en tienda. creando historial para todos los clientes reportes de ventas diarios y mensuales informacion de productos en stock y validando cada venta para no vender productos que no estan disponibles.
        Tambien agregamos un sistema de automatizacion por medio del canal telegram con N8N automatizando consultas para los administradores sin ingresar al sistema de productos con bajo stock pedidos realizados pedidos pendientes ventas realizadas cuanto se recaudo en el dia
      `,
      link: "https://admindistrinort.netlify.app/",
      githubUrl: "https://github.com/CardozoMartin/distri-back",
      liveUrl: "https://admindistrinort.netlify.app/dashboard",
      technologies: ["React", "Tailwind", "JavaScript", "Express", "MongoDB","WebSocket","TypeScript","WhatsAppWeb.js","Nodemailer","Multer","Zustand"],
      features: [
        "Sistema omnicanal (WhatsApp, Web, Tienda física)",
        "Bot de WhatsApp automatizado con WhatsAppWeb.js",
        "Dashboard en tiempo real con WebSocket",
        "Gestión de inventario con validación de stock",
        "Sistema de notificaciones por email",
        "Reportes de ventas diarios y mensuales",
        "Automatización con N8N y Telegram",
        "Historial completo de clientes y pedidos"
      ],
      techStack: {
        frontend: ["React", "Tailwind", "JavaScript", "Zustand"],
        backend: ["Express", "MongoDB", "TypeScript","WebSocket","Nodemailer","WhatsAppWeb.js","Multer"],
        tools: ["Netifly", "Render", "N8N", "Telegram Bot API"]
      },
      images: [
        { url: distri1, title: "Dashboard Principal", description: "Vista general del sistema" },
        { url: distri2, title: "Gestión de Pedidos", description: "Panel de control de pedidos" },
        { url: distri3, title: "WhatsApp Bot", description: "Integración con WhatsApp" },
        { url: distri4, title: "Inventario", description: "Control de stock en tiempo real" },
        { url: distri5, title: "Reportes", description: "Análisis de ventas" },
        { url: distri6, title: "Clientes", description: "Gestión de clientes" },
        { url: distri7, title: "Configuración", description: "Panel de configuración" },
        { url: distri8, title: "Notificaciones", description: "Sistema de alertas" },
        { url: distri9, title: "Vista Mobile", description: "Responsive design" },
        { url: distri10, title: "Productos", description: "Catálogo de productos" },
        { url: distri11, title: "Analytics", description: "Métricas del negocio" },
        { url: distri12, title: "Pedidos Web", description: "Interface de pedidos web" },
        { url: distri13, title: "Chat Bot", description: "Conversaciones automatizadas" },
        { url: distri14, title: "Estados de Pedido", description: "Seguimiento de estados" },
        { url: distri15, title: "Historial", description: "Registro de transacciones" },
        { url: distri16, title: "Usuarios", description: "Gestión de usuarios" },
        { url: distri17, title: "Dashboard Ventas", description: "Métricas de ventas" },
        { url: distri18, title: "WhatsApp Integration", description: "Panel de WhatsApp" },
        { url: distri19, title: "Reports Dashboard", description: "Reportes avanzados" },
        { url: distri20, title: "Stock Control", description: "Control de inventario" },
        { url: distri21, title: "Order Management", description: "Gestión avanzada" },
        { url: distri22, title: "Customer View", description: "Vista del cliente" },
        { url: distri23, title: "Admin Panel", description: "Panel administrativo" }
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
      team: "1 desarrollador"
    },
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
      link: "https://bahiacc.netlify.app/",
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
          description: "Landing page con productos destacados y ofertas"
        },
        {
          url: bahia2,
          title: "Catálogo de Productos",
          description: "Vista del catálogo completo con sistema de filtros"
        },
        {
          url: bahia3,
          title: "Detalle de Producto",
          description: "Vista detallada con galería de imágenes y opciones"
        },
        {
          url: bahia4,
          title: "Carrito de Compras",
          description: "Proceso de checkout con resumen de pedido"
        },
        {
          url: bahia5,
          title: "Panel Admin",
          description: "Dashboard de administración para gestión de productos"
        }
      ],
      videos: [
        {
          url: "",
          title: "Tour de la Plataforma",
          description: "Recorrido completo por las funcionalidades del e-commerce"
        }
      ],
      status: "Completado",
      duration: "2 meses",
      team: "1 desarrollador"
    },
    {
      id: 9,
      image: changaya,
      title: "ChangaYa - App mobile",
      shortDescription: "Aplicación móvil para ofrecer y buscar changas locales",
      description: "Aplicación móvil diseñada para conectar a personas que buscan y ofrecen trabajos temporales o 'changas' en su área local. Los usuarios pueden crear perfiles, publicar ofertas de trabajo y buscar oportunidades cercanas.",
      detailedDescription: `
        ChangaYa es una innovadora aplicación móvil que facilita la conexión entre personas que buscan 
        y ofrecen trabajos temporales en su comunidad. La plataforma permite a los usuarios crear perfiles 
        detallados, publicar ofertas de trabajo y buscar oportunidades basadas en su ubicación. Manteniendo la integridad y seguridad de todos los usuarios.
      `,
      link: "https://petsqrv2.netlify.app",
      githubUrl: "https://github.com/CardozoMartin/petsqr2.0",
      liveUrl: "https://petsafe-qr.vercel.app",
      technologies: ["Reactjs", "Node.Js","Express","MongoDB"],
      features: [
        "Conexión entre personas que buscan y ofrecen trabajos temporales",
        "Perfiles detallados con información personal y habilidades",
        "Publicación y búsqueda de ofertas de trabajo locales",
        "Sistema de notificaciones para nuevas oportunidades",
        "Interfaz móvil intuitiva y fácil de usar",
        "Filtrado de ofertas por ubicación y categoría",
        "Sistema de valoraciones y comentarios entre usuarios",
        "Seguridad y verificación de usuarios",
        "Sistema de reportes para mantener la integridad de la plataforma"
      ],
      techStack: {
        frontend: ["ReactJs", "Boostrap", "BoostrapIcons"],
        backend: ["Express", "JavaScript"],
        integrations: ["Supabase", "Nodemailer"],
        tools: ["Render", "Netifly"]
      },
      images: [
        { url: petsqr1, title: "Perfil de Mascota", description: "Vista del perfil completo con información y código QR" },
        { url: petsqr2, title: "Mapa de Avistamientos", description: "Sistema de geolocalización para mascotas perdidas" },
        { url: petsqr3, title: "Dashboard", description: "Panel de control principal" },
        { url: petsqr4, title: "Registro", description: "Formulario de registro de mascotas" },
        { url: petsqr5, title: "QR Generator", description: "Generador de códigos QR" },
        { url: petsqr6, title: "Alertas", description: "Sistema de notificaciones" },
        { url: petsqr7, title: "Historial Médico", description: "Registro de salud" },
        { url: petsqr8, title: "Galería", description: "Fotos de la mascota" },
        { url: petsqr9, title: "Contactos", description: "Información de contacto" },
        { url: petsqr10, title: "Configuración", description: "Ajustes del perfil" }
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
      team: "1 desarrollador"
    }
  ];
  
  // Todos los proyectos (incluye los destacados + otros proyectos)
  const allProjects = [
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
      link: "https://bahiacc.netlify.app/",
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
      id: 3,
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
      id: 4,
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
      link: "https://gestiongym.netlify.app/",
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
      id: 5,
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
      link: "https://petsqrv2.netlify.app",
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
      id: 6,
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
      id: 7,
      image: distrinort,
      title: "Distri Nort - App de Pedidos",
      shortDescription: "Sistema onmicanal para pedidos",
      description: "Sistema creado para gestionar pedidos de manera eficiente. Abarcando multiples canales de venta. Bot de WhatsApp integrado. Pedidos por via web tambien pedidos de forma presencial en la tienda con sistema de notificaciones para mantener informado al cliente.",
      detailedDescription: `
        Sistema para facilitar la toma de pedidos mediante todos los canales de forma automatica pedidos en tiempo real por canales como whatsapp, web y en tienda. creando historial para todos los clientes reportes de ventas diarios y mensuales informacion de productos en stock y validando cada venta para no vender productos que no estan disponibles.
        Tambien agregamos un sistema de automatizacion por medio del canal telegram con N8N automatizando consultas para los administradores sin ingresar al sistema de productos con bajo stock pedidos realizados pedidos pendientes ventas realizadas cuanto se recaudo en el dia
      `,
      link: "https://admindistrinort.netlify.app/",
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
      id: 8,
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
    {
      id: 9,
      image: changaya,
      title: "Changaya - App con Google Sign-in",
      shortDescription: "Aplicación móvil con autenticación de Google y Supabase",
      description: "Aplicación móvil desarrollada con React Native que implementa autenticación con Google Sign-in y Supabase. Utiliza tecnologías modernas de gestión de estado y formularios para proporcionar una experiencia de usuario fluida.",
      detailedDescription: `
        Changaya es una aplicación móvil innovadora desarrollada con React Native que integra 
        autenticación segura mediante Google Sign-in y Supabase. La app implementa patrones modernos 
        de gestión de estado con Zustand y validación de formularios con React Hook Form.

        El backend está construido con Express y TypeScript, utilizando MongoDB como base de datos 
        principal. El sistema incluye notificaciones por email mediante Nodemailer y autenticación 
        segura con JWT.
      `,
      link: "https://changaya-app.netlify.app",
      githubUrl: "https://github.com/CardozoMartin/changaya-front",
      liveUrl: "https://changaya-app.netlify.app",
      technologies: ["React Native", "Google Sign-in", "Supabase", "TanStack Query", "React Hook Form", "Zustand", "Express", "TypeScript", "MongoDB", "Mongoose", "Nodemailer", "JWT"],
      features: [
        "🔐 Autenticación con Google Sign-in integrado",
        "🔑 Sistema seguro de JWT para tokens",
        "📱 Interfaz nativa responsiva",
        "💾 Gestión de estado con Zustand",
        "📋 Formularios validados con React Hook Form",
        "🔄 Sincronización de datos con TanStack Query",
        "📧 Notificaciones por email con Nodemailer",
        "📦 Persistencia de datos en MongoDB"
      ],
      techStack: {
        frontend: ["React Native", "Google Sign-in", "Supabase", "TanStack Query", "React Hook Form", "Zustand"],
        backend: ["Express", "TypeScript", "MongoDB", "Mongoose", "Nodemailer", "JWT"],
        tools: ["Netlify", "GitHub"]
      },
      images: [
        {
          url: changaya1,
          title: "Pantalla de Inicio",
          description: "Interfaz inicial con Google Sign-in"
        },
        {
          url: changaya2,
          title: "Dashboard",
          description: "Panel principal de la aplicación"
        },
        {
          url: changaya3,
          title: "Formularios",
          description: "Interfaz de formularios validados"
        },
        {
          url: changaya4,
          title: "Listado",
          description: "Vista de listado de datos"
        },
        {
          url: changaya5,
          title: "Perfil",
          description: "Perfil del usuario"
        },
        {
          url: changaya6,
          title: "Configuración",
          description: "Panel de configuración"
        },
        {
          url: changaya7,
          title: "Notificaciones",
          description: "Sistema de notificaciones"
        }
      ],
      videos: [
        {
          url: "",
          title: "Demo de Changaya",
          description: "Demostración completa de la funcionalidad de la app"
        }
      ],
      status: "Completado",
      duration: "2 meses",
      team: "1 desarrollador"
    },
  ];

  // Determinar qué proyectos mostrar
  const displayedProjects = showAll ? allProjects : featuredProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
          >
            <span className="text-emerald-400 text-sm font-mono uppercase tracking-wider">
              {showAll ? 'Todos los Proyectos' : 'Proyectos Destacados'}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            {showAll ? 'Portafolio ' : 'Proyectos '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {showAll ? 'Completo' : 'Destacados'}
            </span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {showAll 
              ? 'Explora toda mi trayectoria de desarrollo. Estos proyectos representan mi evolución como desarrollador backend'
              : 'Una muestra de mis mejores trabajos recientes, reflejando mis capacidades actuales en desarrollo full-stack y arquitectura de sistemas'
            }
          </p>
        </motion.div>

        {/* Projects Display */}
        {!showAll ? (
          /* Featured Projects - Large Cards */
          <div className="space-y-12">
            {displayedProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        ) : (
          /* All Projects - Grid Cards */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
          >
            {displayedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  project={project}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Botón Ver Más Proyectos - Solo si no estamos en showAll */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-6 text-sm">
              Estos proyectos muestran mi nivel actual. ¿Quieres ver más de mi trabajo anterior?
            </p>
            <Link
              to="/all-projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <span>Ver Todos los Proyectos</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        )}

        {/* GitHub CTA - Solo en la versión completa */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-white/60 mb-6">¿Quieres ver el código fuente de estos proyectos?</p>
            <a
              href="https://github.com/CardozoMartin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver en GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;