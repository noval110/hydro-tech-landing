import React, { useState } from 'react';

export default function HarvestCalculator({ darkMode }) {
  const [plantType, setPlantType] = useState('pakcoy');
  const [holes, setHoles] = useState(50);
  const [activePhase, setActivePhase] = useState(1);

  const data = {
    pakcoy: { name: 'Pakcoy', days: 25, yieldPerHole: 0.15, price: 15000 },
    selada: { name: 'Selada', days: 35, yieldPerHole: 0.20, price: 25000 },
    kangkung: { name: 'Kangkung', days: 21, yieldPerHole: 0.10, price: 10000 }
  };

  const selected = data[plantType];
  const totalYield = (holes * selected.yieldPerHole).toFixed(1);
  const totalRevenue = holes * selected.yieldPerHole * selected.price;

  const phases = [
    { id: 1, title: 'Semai', desc: 'Benih diletakkan di rockwool basah. Suhu dijaga stabil.' },
    { id: 2, title: 'Vegetatif', desc: 'Sistem memompa nutrisi PPM tinggi untuk pembentukan daun.' },
    { id: 3, title: 'Panen', desc: 'PPM diturunkan. Sayuran segar siap dipotong dari netpot.' }
  ];

  return (
   <section id="simulasi" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'bg-green-950/80 border-green-800/50 text-green-400' : 'bg-green-50 border-green-200 text-green-700'}`}>
            Fitur Cerdas
          </div>
          <h2 className={`text-3xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            Hitung Potensi & <span className="text-green-600">Fase Panen</span> Anda
          </h2>
          <p className={`text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Bukan sekadar kalkulator untung-rugi. Visualisasikan proses tumbuhnya, lalu pesan sistem yang sesuai dengan ruang Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
       
          <div className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.15)]' 
              : 'bg-white border-zinc-100 shadow-[0_20px_60px_rgba(34,197,94,0.3)]'
          }`}>
            <div>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Siklus Hidup {selected.name}</h3>
              
              <div className="space-y-4">
                {phases.map((phase) => (
                  <div 
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2 active:scale-[0.98] ${
                      activePhase === phase.id 
                        ? (darkMode ? 'bg-zinc-950 border-green-500 shadow-md' : 'bg-white border-green-500 shadow-md')
                        : (darkMode ? 'border-transparent hover:bg-zinc-800' : 'border-transparent hover:bg-zinc-50 hover:border-zinc-200')
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                        activePhase === phase.id 
                          ? (darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600') 
                          : (darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-200 text-zinc-500')
                      }`}>
                        {phase.id}
                      </div>
                      <div className="w-full">
                        <h4 className={`font-bold transition-colors duration-300 ${
                          activePhase === phase.id 
                            ? (darkMode ? 'text-white' : 'text-zinc-900') 
                            : (darkMode ? 'text-zinc-400' : 'text-zinc-500')
                        }`}>
                          {phase.title}
                        </h4>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activePhase === phase.id ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}>
                          <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{phase.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-600 rounded-2xl text-white flex items-center justify-between shadow-lg shadow-green-600/30 border border-green-500">
              <span className="font-semibold text-sm">Target Waktu Total:</span>
              <span className="text-2xl font-black">{selected.days} Hari</span>
            </div>
          </div>

          
          <div className={`rounded-3xl p-8 border transition-all duration-300 ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.15)]' 
              : 'bg-white border-zinc-100 shadow-[0_20px_60px_rgba(34,197,94,0.3)]'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Kalkulator Proyeksi</h3>
            
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Pilih Tanaman:</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(data).map(key => (
                    <button
                      key={key}
                      onClick={() => setPlantType(key)}
                      className={`py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-90 border ${
                        plantType === key 
                          ? 'bg-green-600 border-green-600 text-white shadow-md' 
                          : (darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800' : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100')
                      }`}
                    >
                      {data[key].name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className={`text-sm font-bold ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Jumlah Lubang Tanam:</label>
                  <span className="text-sm font-bold text-green-500">{holes} Lubang</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="200" 
                  step="10"
                  value={holes}
                  onChange={(e) => setHoles(Number(e.target.value))}
                  className={`w-full accent-green-500 h-2 rounded-lg appearance-none cursor-pointer transition-all active:scale-[0.99] ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}
                />
              </div>

              <div className={`pt-6 border-t space-y-4 ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
                
                <div className={`flex justify-between items-center p-4 rounded-xl border transition-all ${darkMode ? 'bg-zinc-950 border-zinc-800 hover:bg-zinc-800/50' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
                  <span className={`text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Estimasi Berat Panen</span>
                  <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{totalYield} <span className={`text-sm font-normal ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Kg</span></span>
                </div>
                
                <div className={`flex justify-between items-center p-4 rounded-xl border transition-all ${
                  darkMode 
                    ? 'bg-zinc-950 border-green-800 shadow-md shadow-green-900/10' 
                    : 'bg-green-50 border-green-100 hover:bg-green-100/80'
                }`}>
                  <span className={`text-sm font-bold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Potensi Nilai Panen</span>
                  <span className={`text-2xl font-black ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Rp {totalRevenue.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <a 
                href="#contact" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); 
                }} 
                className="w-full flex justify-center items-center mt-6 py-4 rounded-xl font-bold bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] cursor-pointer"
              >
                Konsultasikan Modul Ini
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}