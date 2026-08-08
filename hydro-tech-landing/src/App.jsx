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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#09090b';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fafafa';
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal');
      hiddenElements.forEach((el) => observer.observe(el));
      document.getElementById('hero-wrapper')?.classList.add('active');
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${darkMode ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      
      <style>{`
        html.dark, html.dark body {
          background-color: #09090b !important;
        }
        
        html.dark body::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; height: 1000px;
          background-image: linear-gradient(to right, rgba(39, 39, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(39, 39, 42, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
          pointer-events: none;
          z-index: 0;
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

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div id="hero-wrapper" className="reveal">
        <Hero darkMode={darkMode} />
      </div>
      
      <div className="reveal">
        <Features darkMode={darkMode} />
      </div>
      
      <div className="reveal">
        <HarvestCalculator darkMode={darkMode} />
      </div>

      <div className="reveal">
        <InteractiveFeatures darkMode={darkMode} />
      </div>
      
      <div className="reveal">
        <Testimonials darkMode={darkMode} />
      </div>

      <div className="reveal">
        <Gallery darkMode={darkMode} />
      </div>

      <div className="reveal">
        <LiveSensor darkMode={darkMode} />
      </div>
      
      <div className="reveal">
        <Contact darkMode={darkMode} />
      </div>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}