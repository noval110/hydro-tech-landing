import React, { useState, useEffect } from 'react';
import Navbar from './components_new/Navbar';
import Hero from './components_new/hero';
import Features from './components_new/features';
import HarvestCalculator from './components_new/HarvestCalculator';
import InteractiveFeatures from './components_new/InteractiveFeatures';
import Testimonials from './components_new/testimonials';
import Gallery from './components_new/gallery';
import LiveSensor from './components_new/LiveSensor';
import Contact from './components_new/contact';
import Footer from './components_new/footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ================================
  // DARK MODE
  // ================================
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  // ================================
  // REVEAL ANIMATION
  // ================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Setelah muncul, berhenti diamati.
            // Jadi tidak akan hilang ketika scroll.
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Hero langsung tampil
    const hero = document.getElementById('hero-wrapper');

    if (hero) {
      hero.classList.add('active');
      observer.unobserve(hero);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  // ================================
  // AGAR REVEAL TIDAK HILANG
  // SAAT DARK/LIGHT MODE DIGANTI
  // ================================
  useEffect(() => {
    // React melakukan re-render saat darkMode berubah.
    // Setelah render selesai, kembalikan class "active"
    // ke semua bagian yang sudah pernah tampil.

    requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.reveal');

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // Jika bagian sedang terlihat di layar,
        // pastikan tetap active.
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0
        ) {
          element.classList.add('active');
        }
      });

      // Khusus konsultasi:
      // kalau sebelumnya sudah pernah sampai bagian ini,
      // jangan sampai hilang saat ganti mode.
      const contact = document.querySelector('#contact');

      if (contact) {
        const contactWrapper = contact.parentElement;

        if (contactWrapper?.classList.contains('reveal')) {
          const rect = contactWrapper.getBoundingClientRect();

          if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
          ) {
            contactWrapper.classList.add('active');
          }
        }
      }
    });
  }, [darkMode]);


  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 site-grid-bg ${
        darkMode
          ? 'dark text-zinc-100'
          : 'text-zinc-900'
      }`}
    >

      <style>{`
        .site-grid-bg {
          background-color: #fafafa;
          background-image:
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.06) 1px,
              transparent 1px
            );
          background-size: 36px 36px;
        }

        .dark .site-grid-bg {
          background-color: #09090b !important;
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.07) 1px,
              transparent 1px
            ) !important;
          background-size: 36px 36px;
        }

        .ambient-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(34, 197, 94, 0.08);
          filter: blur(100px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>


      {/* NAVBAR */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* HERO */}
      <div
        id="hero-wrapper"
        className="reveal"
      >
        <Hero darkMode={darkMode} />
      </div>


      {/* FEATURES */}
      <div className="reveal">
        <Features darkMode={darkMode} />
      </div>


      {/* HARVEST CALCULATOR */}
      <div className="reveal">
        <HarvestCalculator darkMode={darkMode} />
      </div>


      {/* INTERACTIVE FEATURES */}
      <div className="reveal">
        <InteractiveFeatures darkMode={darkMode} />
      </div>


      {/* TESTIMONIALS */}
      <div className="reveal">
        <Testimonials darkMode={darkMode} />
      </div>


      {/* GALLERY */}
      <div className="reveal">
        <Gallery darkMode={darkMode} />
      </div>


      {/* LIVE SENSOR */}
      <div className="reveal">
        <LiveSensor darkMode={darkMode} />
      </div>


      {/* KONSULTASI */}
      <div className="reveal">
        <Contact darkMode={darkMode} />
      </div>


      {/* FOOTER */}
      <Footer darkMode={darkMode} />

    </div>
  );
}