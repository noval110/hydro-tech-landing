import React, { useState, useEffect } from 'react';

export default function LiveSensor({ darkMode }) {
  const [sensorData, setSensorData] = useState({
    ppm: 1240,
    ph: 6.2,
    temp: 27.4,
    humidity: 82
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        ppm: Math.floor(1230 + Math.random() * 20),
        ph: Number((6.1 + Math.random() * 0.3).toFixed(1)),
        temp: Number((27.0 + Math.random() * 0.8).toFixed(1)),
        humidity: Math.floor(80 + Math.random() * 5)
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-16 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-zinc-950 text-white border-t border-zinc-900'
          : 'bg-white text-zinc-900 border-t border-zinc-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* JUDUL */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h3
              className={`text-2xl font-extrabold tracking-tight ${
                darkMode ? '!text-white' : '!text-zinc-900'
              }`}
            >
              Status Sensor Real-Time
            </h3>
          </div>
        </div>

        {/* GRID SENSOR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* NUTRISI */}
          <div
            className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800'
                : 'bg-white border-zinc-200'
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                darkMode ? '!text-white' : '!text-zinc-900'
              }`}
            >
              Nutrisi (TDS)
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono !text-green-500">
                {sensorData.ppm}
              </span>

              <span className="text-xs font-bold !text-zinc-500 dark:!text-zinc-400">
                PPM
              </span>
            </div>

            <div className="mt-3 text-[11px] font-medium !text-emerald-600 dark:!text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
              Optimal (1000 - 1400)
            </div>
          </div>

          {/* PH */}
          <div
            className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800'
                : 'bg-white border-zinc-200'
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                darkMode ? '!text-white' : '!text-zinc-900'
              }`}
            >
              Keasaman Air (pH)
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono !text-green-500">
                {sensorData.ph}
              </span>

              <span className="text-xs font-bold !text-zinc-500 dark:!text-zinc-400">
                pH
              </span>
            </div>

            <div className="mt-3 text-[11px] font-medium !text-emerald-600 dark:!text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
              Normal (5.5 - 6.5)
            </div>
          </div>

          {/* SUHU */}
          <div
            className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800'
                : 'bg-white border-zinc-200'
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                darkMode ? '!text-white' : '!text-zinc-900'
              }`}
            >
              Suhu Lingkungan
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono !text-green-500">
                {sensorData.temp}
              </span>

              <span className="text-xs font-bold !text-zinc-500 dark:!text-zinc-400">
                °C
              </span>
            </div>

            <div className="mt-3 text-[11px] font-medium !text-emerald-600 dark:!text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
              Kondisi Stabil
            </div>
          </div>

          {/* KELEMBABAN */}
          <div
            className={`p-6 rounded-2xl border shadow-sm transition-colors duration-300 ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800'
                : 'bg-white border-zinc-200'
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                darkMode ? '!text-white' : '!text-zinc-900'
              }`}
            >
              Kelembaban Udara
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono !text-green-500">
                {sensorData.humidity}
              </span>

              <span className="text-xs font-bold !text-zinc-500 dark:!text-zinc-400">
                %
              </span>
            </div>

            <div className="mt-3 text-[11px] font-medium !text-emerald-600 dark:!text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
              Aerasi Bagus
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}