import React from 'react';
import { Sprout, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Features({ darkMode }) {
  const featuresList = [
    {
      icon: <Sprout className="w-6 h-6 text-green-500" />,
      title: 'Hidroponik Modern',
      desc: 'Optimasi ruang tanam vertikal dan horizontal untuk hasil panen maksimal di lahan terbatas.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      title: 'Automasi IoT ESP32',
      desc: 'Pemantauan mikrokontroler secara real-time untuk sirkulasi air dan nutrisi otomatis.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: 'Proteksi Tanaman',
      desc: 'Sistem peringatan dini otomatis apabila suhu air atau kadar pH melewati batas aman.'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Efisiensi Daya & Air',
      desc: 'Menghemat penggunaan air hingga 90% dibanding metode pertanian konvensional.'
    }
  ];

  // Fungsi untuk melacak posisi kursor mouse pada kartu
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-green-200 dark:border-green-800">
            Keunggulan Sistem
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">
            Teknologi Cerdas untuk Hasil Optimal
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Dirancang khusus dengan standar industri untuk memudahkan pengelolaan kebun modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((item, index) => (
            <div 
              key={index}
              onMouseMove={handleMouseMove}
              className={`relative overflow-hidden p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-zinc-900 border-zinc-800 hover:border-green-500/50' 
                  : 'bg-zinc-50 border-zinc-200 hover:border-green-500 hover:shadow-xl'
              }`}
            >
              {/* Efek Cahaya Spotlight yang Mengikuti Kursor */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(34, 197, 94, 0.12), transparent 80%)`
                }}
              />

              {/* Wadah Ikon */}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-lg font-bold mb-2">{item.title}</h3>
              <p className="relative z-10 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}