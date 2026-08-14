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

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={(e) => scrollTo(e, 'home')}
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-950 flex items-center justify-center text-green-600 dark:text-green-400 transition-transform group-hover:scale-110">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>

            {/* AGRI: HITAM ATAS, PUTIH SAAT SCROLL */}
            <span
              className={`font-extrabold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-zinc-900'
              }`}
            >
              Agri<span className="text-green-600">Smart</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {/* BERANDA */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-white hover:text-green-400'
                  : 'text-zinc-900 hover:text-green-600'
              }`}
            >
              Beranda
            </a>

            {/* TEKNOLOGI */}
            <a
              href="#teknologi"
              onClick={(e) => scrollTo(e, 'teknologi')}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-white hover:text-green-400'
                  : 'text-zinc-900 hover:text-green-600'
              }`}
            >
              Teknologi
            </a>

            {/* SIMULASI */}
            <a
              href="#simulasi"
              onClick={(e) => scrollTo(e, 'simulasi')}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-white hover:text-green-400'
                  : 'text-zinc-900 hover:text-green-600'
              }`}
            >
              Simulasi
            </a>

            {/* TESTIMONI */}
            <a
              href="#testimoni"
              onClick={(e) => scrollTo(e, 'testimoni')}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-white hover:text-green-400'
                  : 'text-zinc-900 hover:text-green-600'
              }`}
            >
              Testimoni
            </a>

            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:scale-110 transition-all active:scale-95 shadow-sm cursor-pointer"
              title="Ganti Tema"
              type="button"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* KONSULTASI */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-zinc-900 dark:bg-green-600 hover:bg-green-600 text-white transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Konsultasi
            </a>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-lg cursor-pointer"
              type="button"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 cursor-pointer"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 pt-2 pb-6 transition-all animate-fadeIn">
          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">

            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className="block py-2.5 px-4 rounded-xl text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-green-50 dark:hover:bg-green-950/40 hover:text-green-600 transition-all"
            >
              Beranda
            </a>

            <a
              href="#teknologi"
              onClick={(e) => scrollTo(e, 'teknologi')}
              className="block py-2.5 px-4 rounded-xl text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-green-50 dark:hover:bg-green-950/40 hover:text-green-600 transition-all"
            >
              Teknologi
            </a>

            <a
              href="#simulasi"
              onClick={(e) => scrollTo(e, 'simulasi')}
              className="block py-2.5 px-4 rounded-xl text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-green-50 dark:hover:bg-green-950/40 hover:text-green-600 transition-all"
            >
              Simulasi
            </a>

            <a
              href="#testimoni"
              onClick={(e) => scrollTo(e, 'testimoni')}
              className="block py-2.5 px-4 rounded-xl text-zinc-700 dark:text-zinc-200 font-semibold hover:bg-green-50 dark:hover:bg-green-950/40 hover:text-green-600 transition-all"
            >
              Testimoni
            </a>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, 'contact')}
                className="block w-full py-3 text-center rounded-2xl font-bold bg-green-600 text-white shadow-lg shadow-green-600/30 hover:bg-green-700 transition-all cursor-pointer"
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