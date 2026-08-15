import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sprout, Rocket } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [selectedPackage, setSelectedPackage] = useState('Starter Kit (Vertical)');
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // ================================
  // KIRIM FORM
  // ================================
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsClosing(false);
    setShowModal(true);
  };

  // ================================
  // TUTUP POPUP SAJA
  // ================================
  const closeModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 350);
  };

  // ================================
  // KEMBALI KE BERANDA
  // ================================
  const backToHome = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);

      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 350);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 ${
        darkMode
          ? 'bg-zinc-950 text-white'
          : 'bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================================
              KARTU PILIH MODUL
          ================================= */}
          <div
            className={`space-y-8 p-8 rounded-3xl transition-colors duration-300 border ${
              darkMode
                ? 'bg-zinc-900 text-white border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.15)]'
                : 'bg-white text-zinc-900 border-zinc-200 shadow-[0_20px_60px_rgba(34,197,94,0.3)]'
            }`}
          >
            <div>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}
              >
                Mulai kebun pintar Anda hari ini
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                Pilih modul yang paling sesuai dengan kebutuhan ruang Anda.
                Tim ahli kami siap membantu instalasi penuh di lokasi Anda
              </p>
            </div>

            <div className="space-y-4">

              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                Pilih Tipe Modul:
              </p>

              <div className="space-y-3">

                {/* ================================
                    STARTER KIT
                ================================= */}
                <div
                  onClick={() =>
                    setSelectedPackage('Starter Kit (Vertical)')
                  }
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${
                    selectedPackage === 'Starter Kit (Vertical)'
                      ? darkMode
                        ? 'border-[3px] border-green-500 bg-zinc-950 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                        : 'border-[3px] border-green-500 bg-white shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                      : darkMode
                        ? 'border-2 border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                        : 'border-2 border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <span className="text-green-500 flex items-center justify-center">
                        <Sprout className="w-6 h-6" />
                      </span>

                      <div>
                        <h4
                          className={`font-bold text-sm ${
                            darkMode
                              ? 'text-white'
                              : 'text-zinc-900'
                          }`}
                        >
                          Starter Kit (Vertical)
                        </h4>

                        <p
                          className={`text-xs mt-0.5 ${
                            darkMode
                              ? 'text-zinc-400'
                              : 'text-zinc-500'
                          }`}
                        >
                          Kapasitas 36 lubang tanam. Cocok untuk balkon
                          apartemen
                        </p>
                      </div>

                    </div>

                    <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">
                      Rp 2 Jt
                    </span>

                  </div>
                </div>


                {/* ================================
                    PRO SYSTEM
                ================================= */}
                <div
                  onClick={() =>
                    setSelectedPackage('Pro System (Horizontal)')
                  }
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${
                    selectedPackage === 'Pro System (Horizontal)'
                      ? darkMode
                        ? 'border-[3px] border-green-500 bg-zinc-950 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                        : 'border-[3px] border-green-500 bg-white shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                      : darkMode
                        ? 'border-2 border-zinc-800 bg-zinc-950 hover:border-zinc-700'
                        : 'border-2 border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <span className="text-green-500 flex items-center justify-center">
                        <Rocket className="w-6 h-6" />
                      </span>

                      <div>
                        <h4
                          className={`font-bold text-sm ${
                            darkMode
                              ? 'text-white'
                              : 'text-zinc-900'
                          }`}
                        >
                          Pro System (Horizontal)
                        </h4>

                        <p
                          className={`text-xs mt-0.5 ${
                            darkMode
                              ? 'text-zinc-400'
                              : 'text-zinc-500'
                          }`}
                        >
                          Kapasitas 120 lubang tanam dengan dual sensor IoT
                        </p>
                      </div>

                    </div>

                    <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">
                      Rp 5.8 Jt
                    </span>

                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* ================================
              FORM KONSULTASI
          ================================= */}
          <div
            className={`rounded-3xl p-8 border transition-colors duration-300 ${
              darkMode
                ? 'bg-zinc-900 text-white border-zinc-800 shadow-[0_20px_50px_rgba(34,197,94,0.15)]'
                : 'bg-white text-zinc-900 border-zinc-200 shadow-[0_20px_60px_rgba(34,197,94,0.3)]'
            }`}
          >

            <h3
              className={`text-xl font-bold mb-6 ${
                darkMode
                  ? 'text-white'
                  : 'text-zinc-900'
              }`}
            >
              Jadwalkan Konsultasi
            </h3>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* ================================
                  NAMA
              ================================= */}
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wide mb-2 ${
                    darkMode
                      ? 'text-zinc-300'
                      : 'text-zinc-700'
                  }`}
                >
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  required
                  placeholder="Someone"
                  className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all shadow-sm ${
                    darkMode
                      ? 'bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                  }`}
                />
              </div>


              {/* ================================
                  EMAIL / WHATSAPP
              ================================= */}
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wide mb-2 ${
                    darkMode
                      ? 'text-zinc-300'
                      : 'text-zinc-700'
                  }`}
                >
                  Email / WhatsApp
                </label>

                <input
                  type="text"
                  required
                  placeholder="0812xxx atau email@..."
                  className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all shadow-sm ${
                    darkMode
                      ? 'bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                  }`}
                />
              </div>


              {/* ================================
                  TOMBOL KIRIM
              ================================= */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-md"
              >
                Kirim Pesan
              </button>

              <p
                className={`text-center text-xs mt-4 ${
                  darkMode
                    ? 'text-zinc-500'
                    : 'text-zinc-400'
                }`}
              >
                Kami akan membalas dalam waktu maksimal 24 jam
              </p>

            </form>
          </div>

        </div>
      </div>


      {/* ================================
          POPUP / MODAL
      ================================= */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

            {/* ================================
                BACKDROP
            ================================= */}
            <div
              className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ease-out ${
                darkMode
                  ? 'bg-black/70'
                  : 'bg-black/40'
              } ${
                isClosing
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
              onClick={closeModal}
            />

            {/* ================================
                POPUP
            ================================= */}
            <div
              className={`relative rounded-3xl p-8 max-w-md w-full flex flex-col items-center text-center transform transition-all duration-300 border shadow-2xl ${
                darkMode
                  ? 'bg-zinc-900 text-white border-zinc-800'
                  : 'bg-white text-zinc-900 border-zinc-200'
              } ${
                isClosing
                  ? 'scale-90 opacity-0 translate-y-4'
                  : 'scale-100 opacity-100 translate-y-0'
              }`}
            >

              {/* ================================
                  ICON
              ================================= */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-inner ${
                  darkMode
                    ? 'bg-green-950 text-green-400'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>


              {/* ================================
                  JUDUL POPUP
              ================================= */}
              <h3
                className={`text-2xl font-extrabold mb-2 ${
                  darkMode
                    ? 'text-white'
                    : 'text-zinc-900'
                }`}
              >
                Berhasil Terkirim!
              </h3>


              {/* ================================
                  ISI POPUP
              ================================= */}
              <p
                className={`mb-8 leading-relaxed ${
                  darkMode
                    ? 'text-zinc-300'
                    : 'text-zinc-600'
                }`}
              >
                Permintaan konsultasi untuk paket{' '}
                <span className="font-bold text-green-600 dark:text-green-400">
                  {selectedPackage}
                </span>{' '}
                telah kami terima. Tim ahli kami akan segera menghubungi Anda.
              </p>


              {/* ================================
                  TOMBOL KEMBALI KE BERANDA
              ================================= */}
              <button
                type="button"
                onClick={backToHome}
                className={`w-full font-bold py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                }`}
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