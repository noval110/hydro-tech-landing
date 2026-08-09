import React from 'react';
import { Zap } from 'lucide-react';

export default function Hero({ darkMode }) {
  
  return (
    <section id="home" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
       
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs font-bold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Sistem Hidroponik Pintar
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
          Rawat tanaman Anda tanpa <br className="hidden sm:inline" />
          <span className="text-green-600 dark:text-green-400">kerumitan ekstra</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Modul hidroponik berbasis IoT yang otomatis memantau pH air, mengatur sirkulasi nutrisi, dan mengirim laporan langsung ke ponsel Anda. Dirancang khusus untuk ruang terbatas
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#simulasi" className="px-8 py-4 rounded-2xl font-extrabold bg-green-600 hover:bg-green-700 text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_35px_rgba(34,197,94,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer inline-flex items-center justify-center">
            Mulai Simulasi Panen
          </a>
          <a id='teknologi' href="#teknologi" className="px-6 py-3.5 rounded-2xl font-bold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:border-green-500 transition-all cursor-pointer inline-flex items-center justify-center">
            Cara Kerja
          </a>
        </div>

        <div className="mt-16 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-3xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
           <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
            <div className="text-left">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Status Sistem: Normal</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Pembaruan terakhir: Baru saja</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-zinc-100 dark:border-zinc-800 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto justify-around">
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-400">Kadar Nutrisi</p>
              <p className="text-lg font-extrabold text-zinc-900 dark:text-white font-mono">1050 <span className="text-xs font-normal text-zinc-500">PPM</span></p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-400">pH Air</p>
              <p className="text-lg font-extrabold text-zinc-900 dark:text-white font-mono">6.2 <span className="text-xs font-normal text-zinc-500">pH</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}