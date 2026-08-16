import React from 'react';

export default function Hero({ darkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 text-left">

            <h1
              className="hero-title text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              style={{
                color: darkMode ? '#ffffff' : '#18181b',
              }}
            >
              Rawat tanaman Anda tanpa{' '}
              <span className="text-green-600 dark:text-green-500">
                kerumitan ekstra
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-lg font-medium"
              style={{
                color: darkMode ? '#ffffff' : '#18181b',
              }}
            >
              Modul hidroponik berbasis IoT yang otomatis memantau pH air,
              mengatur sirkulasi nutrisi, dan mengirim laporan langsung ke
              ponsel Anda. Dirancang khusus untuk ruang terbatas.
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
                className="px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  backgroundColor: darkMode ? '#18181b' : '#ffffff',
                  color: darkMode ? '#ffffff' : '#18181b',
                  border: darkMode
                    ? '1px solid #27272a'
                    : '1px solid #e4e4e7',
                }}
              >
                Cara Kerja
              </button>

            </div>

            <div
              className="inline-flex flex-wrap items-center gap-6 p-4 rounded-2xl border shadow-sm transition-colors duration-300"
              style={{
                backgroundColor: darkMode ? '#18181b' : '#ffffff',
                borderColor: darkMode ? '#27272a' : '#d4d4d8',
              }}
            >

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <div>

                  <div
                    className="text-xs font-bold"
                    style={{
                      color: darkMode ? '#ffffff' : '#18181b',
                    }}
                  >
                    Status Sistem: Normal
                  </div>

                  <div
                    className="text-[11px]"
                    style={{
                      color: darkMode ? '#a1a1aa' : '#71717a',
                    }}
                  >
                    Pembaruan terakhir: Baru saja
                  </div>

                </div>
              </div>

              <div
                className="hidden sm:block h-8 w-px"
                style={{
                  backgroundColor: darkMode ? '#27272a' : '#d4d4d8',
                }}
              ></div>

              <div className="flex items-center gap-6 text-xs font-semibold">

                <div>
                  <span
                    className="block font-normal text-[10px]"
                    style={{
                      color: darkMode ? '#a1a1aa' : '#52525b',
                    }}
                  >
                    KADAR NUTRISI
                  </span>

                  <span
                    style={{
                      color: darkMode ? '#ffffff' : '#18181b',
                    }}
                  >
                    1050{' '}
                    <span
                      className="font-normal"
                      style={{
                        color: '#71717a',
                      }}
                    >
                      PPM
                    </span>
                  </span>
                </div>

                <div>
                  <span
                    className="block font-normal text-[10px]"
                    style={{
                      color: darkMode ? '#a1a1aa' : '#52525b',
                    }}
                  >
                    PH AIR
                  </span>

                  <span
                    style={{
                      color: darkMode ? '#ffffff' : '#18181b',
                    }}
                  >
                    6.2{' '}
                    <span
                      className="font-normal"
                      style={{
                        color: '#71717a',
                      }}
                    >
                      pH
                    </span>
                  </span>
                </div>

              </div>
            </div>

          </div>

          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/40 to-emerald-400/40 rounded-3xl blur-2xl -z-10"></div>

            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(34,197,94,0.35)] border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 group">

              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop"
                alt="Smart Hydroponic System"
                className="w-full h-[380px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">

                <div className="text-white">


                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
