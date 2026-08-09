import React from 'react';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Sistem Hidroponik Pintar
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Rawat tanaman Anda tanpa <span className="text-green-600">kerumitan ekstra</span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
              Modul hidroponik berbasis IoT yang otomatis memantau pH air, mengatur sirkulasi nutrisi, dan mengirim laporan langsung ke ponsel Anda. Dirancang khusus untuk ruang terbatas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo('simulasi')}
                className="px-8 py-4 rounded-2xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Mulai Simulasi Panen
              </button>
              <button 
                onClick={() => scrollTo('teknologi')}
                className="px-8 py-4 rounded-2xl font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Cara Kerja
              </button>
            </div>

            <div className="inline-flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Status Sistem: Normal</div>
                  <div className="text-[11px] text-zinc-500">Pembaruan terakhir: Baru saja</div>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="flex items-center gap-6 text-xs font-semibold">
                <div>
                  <span className="block text-zinc-400 font-normal text-[10px]">KADAR NUTRISI</span>
                  <span className="text-zinc-900 dark:text-white">1050 <span className="text-zinc-400 font-normal">PPM</span></span>
                </div>
                <div>
                  <span className="block text-zinc-400 font-normal text-[10px]">PH AIR</span>
                  <span className="text-zinc-900 dark:text-white">6.2 <span className="text-zinc-400 font-normal">pH</span></span>
                </div>
              </div>
            </div>
          </div>

         <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/40 to-emerald-400/40 rounded-3xl blur-2xl -z-10"></div>
            
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(34,197,94,0.35)] border border-zinc-200/80 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 group">
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop" 
                alt="Smart Hydroponic System" 
                className="w-full h-[380px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="px-3 py-1 rounded-lg bg-green-600/90 backdrop-blur-md text-[12px] font-bold uppercase tracking-wider">IoT Monitoring</span>
                  <p className="text-base font-medium mt-2 text-zinc-100">Teknologi sensor otomatis untuk hasil panen optimal.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}