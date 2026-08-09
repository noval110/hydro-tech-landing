import React, { useState } from 'react';
import { Droplets, Lightbulb } from 'lucide-react';

export default function InteractiveFeatures({ darkMode }) {
  const [pumpActive, setPumpActive] = useState(false);
  const [growLight, setGrowLight] = useState(false);
  const [waterLevel] = useState(85);

  const faqs = [
    {
      id: 1,
      category: "Perawatan",
      question: "Bagaimana sistem perawatan dari hidroponik AgriSmart?",
      answer: "Perawatan sangat mudah dan otomatis: sistem memantau level air di tangki, menjaga takaran nutrisi PPM, serta memutar sirkulasi air 24/7 tanpa perlu pengawasan manual terus-menerus"
    },
    {
      id: 2,
      category: "Nutrisi",
      question: "Berapa takaran PPM ideal untuk tanaman selada dan pakcoy?",
      answer: "Untuk hasil optimal pada sistem hidroponik AgriSmart, pastikan nutrisi PPM dijaga di kisaran 1000 - 1200 dengan tingkat keasaman (pH) air antara 6.0 hingga 6.5"
    },
    {
      id: 3,
      category: "Panen",
      question: "Berapa lama rata-rata masa panen sayuran?",
      answer: "Rata-rata masa panen menggunakan modul kami berkisar antara 21 hingga 35 hari, tergantung pada jenis tanaman yang Anda pilih (seperti kangkung, pakcoy, atau selada)"
    },
    {
      id: 4,
      category: "Harga",
      question: "Berapa harga dan apa saja pilihan modul yang tersedia?",
      answer: "Tersedia dua tipe modul: Starter Kit (Rp 2.5 Jt untuk 36 lubang) dan Pro System (Rp 5.8 Jt untuk 120 lubang). Silakan pilih pada form konsultasi di bawah!"
    },
    {
      id: 5,
      category: "Instalasi",
      question: "Apakah sulit merakit modul AgriSmart di rumah?",
      answer: "Sangat mudah! Modul dikirimkan dalam bentuk sistem modular siap pasang (knock-down) yang dapat dirakit sendiri dalam waktu kurang dari 30 menit tanpa alat khusus"
    },
    {
      id: 6,
      category: "Listrik",
      question: "Berapa besar daya listrik yang dikonsumsi sistem ini?",
      answer: "Sangat hemat energi. Pompa sirkulasi pintar dan sensor IoT kami hanya memakan daya sekitar 15 Watt secara total (lebih hemat dari lampu rumah biasa)"
    },
    {
      id: 7,
      category: "Garansi",
      question: "Apakah ada garansi untuk komponen IoT dan pompa?",
      answer: "Ya, setiap pembelian modul AgriSmart dilengkapi garansi resmi selama 1 tahun untuk seluruh komponen elektronik, sensor, dan pompa air"
    },
    {
      id: 8,
      category: "Aplikasi",
      question: "Apakah sistem ini wajib dihubungkan ke smartphone?",
      answer: "Tidak wajib. Sistem dapat berjalan secara otomatis penuh tanpa smartphone. Namun, menghubungkannya ke aplikasi memberi Anda kemudahan memantau status secara jarak jauh"
    }
  ];

  const [activeFaq, setActiveFaq] = useState(faqs[0]);

  return (
    <section className={`py-24 border-t transition-colors duration-300 ${darkMode ? 'bg-zinc-950 border-zinc-900 text-white' : 'bg-white border-zinc-100 text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* --- LIVE IoT SIMULATOR --- */}
        <div className="reveal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mt-3 mb-3">
              Uji Coba Kendali <span className="text-green-600">Smart IoT Node</span>
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Klik tombol di bawah untuk melihat perubahan status perangkat keras secara real-time
            </p>
          </div>

          <div className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.2)]' 
              : 'bg-white border-zinc-200 shadow-[0_20px_50px_rgba(34,197,94,0.18)]'
          }`}>
            
            <div className="bg-zinc-950 text-white rounded-2xl p-6 space-y-6 shadow-inner border border-zinc-800">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Status Perangkat</span>
                <span className="flex items-center gap-2 text-xs text-green-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
                </span>
              </div>
              <div>
                <p className="text-xs text-zinc-400">Kapasitas Tangki Air</p>
                <div className="flex justify-between items-center mt-1 mb-2">
                  <span className="text-xl font-bold font-mono">{waterLevel}%</span>
                  <span className="text-xs text-green-400">Aman</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${waterLevel}%` }}></div>
                </div>
              </div>
              <div className="pt-2 text-xs text-zinc-400 leading-relaxed">
                *Indikator menyala hijau saat perangkat diaktifkan
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${pumpActive ? 'border-green-500 bg-green-500/10 shadow-lg' : darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${pumpActive ? 'bg-green-600 text-white shadow-md' : darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                    <Droplets className="w-6 h-6" />
                  </div>
                  <button 
                    onClick={() => setPumpActive(!pumpActive)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-90 cursor-pointer ${pumpActive ? 'bg-red-600 hover:bg-red-700 text-white shadow-md' : 'bg-green-600 hover:bg-green-700 text-white shadow-md'}`}
                  >
                    {pumpActive ? 'Matikan' : 'Nyalakan'}
                  </button>
                </div>
                <h4 className="font-bold">Pompa Sirkulasi Air</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Status: <span className={pumpActive ? 'text-green-500 font-bold' : 'text-zinc-500'}>{pumpActive ? 'Aktif (Mengalirkan Air)' : 'Standby (Mati)'}</span>
                </p>
              </div>

              <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${growLight ? 'border-green-500 bg-green-500/10 shadow-lg' : darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${growLight ? 'bg-green-600 text-white shadow-md' : darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <button 
                    onClick={() => setGrowLight(!growLight)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-90 cursor-pointer ${growLight ? 'bg-red-600 hover:bg-red-700 text-white shadow-md' : 'bg-green-600 hover:bg-green-700 text-white shadow-md'}`}
                  >
                    {growLight ? 'Matikan' : 'Nyalakan'}
                  </button>
                </div>
                <h4 className="font-bold">Grow Light LED (UV)</h4>
                <p className={`text-xs mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Status: <span className={growLight ? 'text-green-500 font-bold' : 'text-zinc-500'}>{growLight ? 'Aktif (Menyala Terang)' : 'Mati'}</span>
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* --- PUSAT INFORMASI (FAQ) --- */}
        <div className="reveal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mt-3 mb-3">
              Pertanyaan yang Sering <span className="text-green-600">Diajukan</span>
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Pilih berbagai topik di bawah ini untuk mengetahui detail spesifikasi sistem AgriSmart
            </p>
          </div>

          <div className={`rounded-3xl p-6 sm:p-10 border max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-300 ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.2)]' 
              : 'bg-white border-zinc-200 shadow-[0_20px_50px_rgba(34,197,94,0.18)]'
          }`}>
            
            <div className="lg:col-span-7 space-y-2.5 max-h-[420px] overflow-y-auto pr-2">
              {faqs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveFaq(item)}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-200 active:scale-98 flex justify-between items-center cursor-pointer ${
                    activeFaq.id === item.id 
                      ? 'bg-green-600 text-white border-green-600 shadow-md' 
                      : darkMode ? 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-green-500' : 'bg-white text-zinc-700 border-zinc-200 hover:border-green-400 shadow-sm'
                  }`}
                >
                  <span>{item.question}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${activeFaq.id === item.id ? 'bg-green-700 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                    {item.category}
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-5 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[280px] shadow-xl lg:sticky lg:top-28 border border-zinc-800">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Detail Jawaban:</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">{activeFaq.category}</span>
                </div>
                <h4 className="font-bold text-base text-white mb-2">{activeFaq.question}</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {activeFaq.answer}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 text-right font-mono">
                AgriSmart Knowledge Base
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}