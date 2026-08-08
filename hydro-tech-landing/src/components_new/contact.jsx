import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Zap, Droplets, Lightbulb, Sprout, Rocket } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [selectedPackage, setSelectedPackage] = useState('Starter Kit (Vertical)');
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
   <section id="contact" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 reveal bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-[0_20px_60px_rgba(34,197,94,0.3)] dark:shadow-[0_20px_50px_rgba(34,197,94,0.15)] border border-zinc-100 dark:border-zinc-800">
            <div>
              <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-green-200 dark:border-green-800">
                Pesan Modul
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
                Mulai kebun pintar Anda hari ini.
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                Pilih modul yang paling sesuai dengan kebutuhan ruang Anda. Tim ahli kami siap membantu instalasi penuh di lokasi Anda.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Pilih Tipe Modul:</p>
              
              <div className="space-y-3">
                {/* Starter Kit */}
                <div 
                  onClick={() => setSelectedPackage('Starter Kit (Vertical)')}
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${
                    selectedPackage === 'Starter Kit (Vertical)' 
                      ? 'border-[3px] border-green-500 bg-white dark:bg-zinc-950 dark:border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                      : 'border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 opacity-60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                     <span className="text-2xl text-green-500 flex items-center justify-center">
                        <Sprout className="w-6 h-6" />
                      </span>
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Starter Kit (Vertical)</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Kapasitas 36 lubang tanam. Cocok untuk balkon apartemen.</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">Rp 2 Jt</span>
                  </div>
                </div>

                {/* Pro System */}
                <div 
                  onClick={() => setSelectedPackage('Pro System (Horizontal)')}
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${
                    selectedPackage === 'Pro System (Horizontal)' 
                      ? 'border-[3px] border-green-500 bg-white dark:bg-zinc-950 dark:border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                      : 'border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 opacity-60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 flex items-center justify-center">
                        <Rocket className="w-6 h-6" />
                      </span>
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Pro System (Horizontal)</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Kapasitas 120 lubang tanam dengan dual sensor IoT.</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">Rp 5.8 Jt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-[0_20px_60px_rgba(34,197,94,0.3)] dark:shadow-[0_20px_50px_rgba(34,197,94,0.15)] border border-zinc-100 dark:border-zinc-800 reveal transition-colors duration-300" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Jadwalkan Konsultasi</h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all shadow-sm" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-2">Email / WhatsApp</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all shadow-sm" 
                  placeholder="0812xxx atau email@..." 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
              >
                Kirim Pesan
              </button>
              <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-4">
                Kami akan membalas dalam waktu maksimal 24 jam.
              </p>
            </form>
          </div>

        </div>
      </div>

      {showModal && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div 
            className={`absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={closeModal} 
          ></div>

          <div 
            className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center transform transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
              isClosing ? 'scale-90 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'
            }`}
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-5 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-2">Berhasil Terkirim!</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
              Permintaan konsultasi untuk paket <span className="font-bold text-green-600 dark:text-green-400">{selectedPackage}</span> telah kami terima. Tim ahli kami akan segera menghubungi Anda.
            </p>
            
            <button 
              onClick={closeModal} 
              className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}