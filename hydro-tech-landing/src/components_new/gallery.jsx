import React, { useState } from 'react';

export default function Gallery({ darkMode }) {
  const [activeTab, setActiveTab] = useState('Semua');
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const filteredProjects =
    activeTab === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="galeri"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-zinc-950 text-white'
          : 'bg-white text-zinc-900'
      }`}
    >

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">

          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{
              color: darkMode ? '#ffffff' : '#18181b'
            }}
          >
            Galeri Instalasi AgriSmart
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{
              color: darkMode ? '#a1a1aa' : '#71717a'
            }}
          >
            Berikut adalah dokumentasi asli hasil pemasangan sistem hidroponik cerdas di lokasi klien
          </p>

          <div className="flex justify-center gap-2 mt-8">

            {['Semua', 'Vertical', 'Horizontal'].map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/40 scale-105'
                    : darkMode
                      ? 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-105'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 hover:scale-105'
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
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-3xl p-6 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between animate-fadeIn"
              style={{
                backgroundColor: darkMode ? '#18181b' : '#ffffff',

                border: darkMode
                  ? hoveredCard === item.id
                    ? '1px solid rgba(34,197,94,0.6)'
                    : '1px solid #27272a'
                  : hoveredCard === item.id
                    ? '1px solid rgba(34,197,94,0.5)'
                    : '1px solid #e4e4e7',

                boxShadow:
                  hoveredCard === item.id
                    ? '0 0 35px rgba(34,197,94,0.35)'
                    : darkMode
                      ? '0 15px 40px rgba(0,0,0,0.25)'
                      : '0 15px 40px rgba(0,0,0,0.06)'
              }}
            >

              <div>

                <div
                  className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative"
                  style={{
                    backgroundColor: darkMode ? '#09090b' : '#f4f4f5',

                    border: darkMode
                      ? '1px solid #27272a'
                      : '1px solid #e4e4e7'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>


                <div className="flex justify-between items-center mb-2">

                  <span
                    className="text-xs font-medium"
                    style={{
                      color: darkMode ? '#a1a1aa' : '#71717a'
                    }}
                  >
                    📍 {item.location}
                  </span>

                </div>


                <h3
                  className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors"
                  style={{
                    color:
                      hoveredCard === item.id
                        ? '#16a34a'
                        : darkMode
                          ? '#ffffff'
                          : '#18181b'
                  }}
                >
                  {item.title}
                </h3>


                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: darkMode ? '#a1a1aa' : '#52525b'
                  }}
                >
                  {item.desc}
                </p>

              </div>


              <div
                className="pt-4 flex items-center justify-between text-xs font-bold"
                style={{
                  borderTop: darkMode
                    ? '1px solid #27272a'
                    : '1px solid #e4e4e7',

                  color: darkMode ? '#a1a1aa' : '#71717a'
                }}
              >

                <span>
                  Status: Terpasang & Aktif
                </span>

                <span
                  style={{
                    color: darkMode ? '#4ade80' : '#16a34a'
                  }}
                >
                  Verifikasi IoT OK ✓
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
