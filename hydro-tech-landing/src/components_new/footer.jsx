import React from 'react';

export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t py-12 text-sm transition-colors duration-300 ${
      darkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-500'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center font-bold text-white shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className={`font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>AgriSmart.</span>
        </div>

        <p className="text-xs text-zinc-400 text-center sm:text-left">
          &copy; 2026 AgriSmart Indonesia. Dibangun untuk IT FEST 2026.
        </p>

        <div className="flex gap-6 text-xs font-medium">
          <a href="#home" className="hover:text-green-500 transition-colors">Kebijakan Privasi</a>
          <a href="#home" className="hover:text-green-500 transition-colors">Syarat & Ketentuan</a>
        </div>

      </div>
    </footer>
  );
}