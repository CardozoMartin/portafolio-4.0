import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-4 md:px-10 py-3 relative z-20 bg-[#111418]">
      {/* Logo */}
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Cardozo Martin Dev</h2>
      </div>

      {/* Botón menú mobile */}
      <button
        className="md:hidden flex items-center justify-center ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Menú desktop */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to={'/'}>Inicio</Link>
          <a className="text-white text-sm font-medium leading-normal" href="#">Proyectos</a>
          <Link to={'contact'} className="text-white text-sm font-medium leading-normal" >Contacto</Link>
        </div>
        <a
          href="/cardozoMartinCv.pdf"
          download
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d80f2] text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">CV</span>
        </a>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181d23] border-b border-[#283039] shadow-2xl flex flex-col items-center py-6 gap-6 md:hidden animate-slide-down z-30 transition-all duration-300">
          <Link className="text-white text-base font-medium leading-normal" to={'/'} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <a className="text-white text-base font-medium leading-normal" href="#" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <Link to={'contact'} className="text-white text-base font-medium leading-normal" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <a
            href="/cardozoMartinCv.pdf"
            download
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d80f2] text-white text-base font-bold leading-normal tracking-[0.015em]"
            onClick={() => setMenuOpen(false)}
          >
            <span className="truncate">Descargar CV</span>
          </a>
        </div>
      )}

      {/* Animación para el menú mobile */}
      <style>
        {`
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease;
          }
        `}
      </style>
    </header>
  );
}

export default Navbar