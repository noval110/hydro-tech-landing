import React, { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Teknologi', id: 'teknologi' },
    { name: 'Galeri', id: 'galeri' },
    { name: 'Simulasi', id: 'simulasi' },
    { name: 'Testimoni', id: 'testimoni' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => scrollTo(e, 'home')}>
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-950 flex items-center justify-center text-green-600 dark:text-green-400 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
              Agri<span className="text-green-600">Smart</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollTo(e, link.id)} 
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-yellow-400 hover:scale-110 transition-all active:scale-95 shadow-sm cursor-pointer"
              title="Ganti Tema"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-900 dark:bg-green-600 hover:bg-green-600 text-white transition-all hover:shadow-lg active:scale-95 cursor-pointer">
              Konsultasi
            </a>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-yellow-400 cursor-pointer"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Modern Mobile Menu Drawer (Lebih Lega & Rapi) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 pt-2 pb-6 transition-all animate-fadeIn">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 shadow-2xl space-y-2">
            
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollTo(e, link.id)} 
                className="flex items-center justify-between py-3 px-4 rounded-2xl text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-green-50 dark:hover:bg-green-950/40 hover:text-green-600 transition-all"
              >
                {link.name}
                <span className="text-green-500 font-normal">→</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-zinc-100 dark:border-zinc-800">
              <a 
                href="#contact" 
                onClick={(e) => scrollTo(e, 'contact')} 
                className="block w-full py-3.5 text-center rounded-2xl font-bold bg-green-600 text-white shadow-lg shadow-green-600/30 hover:bg-green-700 transition-all cursor-pointer"
              >
                Konsultasi Sekarang
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}