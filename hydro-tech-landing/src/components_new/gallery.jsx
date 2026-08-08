import React, { useState } from 'react';

export default function Gallery({ darkMode }) {
  const [activeTab, setActiveTab] = useState('Semua');

  const projects = [
    {
      id: 1,
      title: 'Instalasi Balkon Apartemen',
      category: 'Vertical',
      location: 'Jakarta Selatan',
      image: '/images/balkon.jpg', 
      desc: 'Starter Kit Vertical berkapasitas 36 lubang, sangat pas untuk ruang terbatas di balkon apartemen.'
    },
    {
      id: 2,
      title: 'Kebun Komersial Rooftop',
      category: 'Horizontal',
      location: 'Bandung',
      image: '/images/rooftop.jpg', 
      desc: 'Pro System Horizontal dengan dual sensor IoT otomatis untuk skala produksi harian.'
    },
    {
      id: 3,
      title: 'Urban Farming Halaman Rumah',
      category: 'Vertical',
      location: 'Purwokerto',
      image: '/images/halaman.jpg', 
      desc: 'Pemasangan modul vertikal kustom untuk pekarangan rumah minimalis.'
    },
    {
      id: 4,
      title: 'Greenhouse Skala Hobi',
      category: 'Horizontal',
      location: 'Yogyakarta',
      image: '/images/greenhouse.jpg', 
      desc: 'Sistem otomatis penuh dengan pemantauan nutrisi jarak jauh via smartphone.'
    }
  ];

  const filteredProjects = activeTab === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="gallery" className={`py-24 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 dark:bg-green-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-green-200 dark:border-green-800">
            Portofolio Nyata
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Galeri Instalasi AgriSmart
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
            Berikut adalah dokumentasi asli hasil pemasangan sistem hidroponik cerdas di lokasi klien.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            {['Semua', 'Vertical', 'Horizontal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/40 scale-105'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-105'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_35px_rgba(34,197,94,0.35)] hover:shadow-[0_0_55px_rgba(34,197,94,0.6)] hover:border-green-500 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between animate-fadeIn"
            >
              <div>
              <div className="w-full h-56 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 mb-6 border border-zinc-200 dark:border-zinc-800 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-md bg-green-100 dark:bg-zinc-800 text-green-700 dark:text-green-400 border border-green-300 dark:border-zinc-700">
                    {item.category} System
                  </span>
                  <span className="text-xs font-medium text-zinc-400">📍 {item.location}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-400">
                <span>Status: Terpasang & Aktif</span>
                <span className="text-green-600 dark:text-green-400">Verifikasi IoT OK ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}