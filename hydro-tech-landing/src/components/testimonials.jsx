import React from 'react';

export default function Testimonials({ darkMode }) {
  const reviews = [
    {
      name: "Budi Santoso",
      role: "Urban Farmer Jakarta",
      comment: "Desainnya sangat minimalis dan tidak makan tempat di balkon. Hasil panen selada saya meningkat drastis!",
      rating: 5
    },
    {
      name: "Siti Rahma",
      role: "Pemilik Restoran",
      comment: "Sangat inovatif. Kami bisa memasok sayuran segar organik sendiri langsung dari atap restoran berkat modul ini.",
      rating: 5
    },
    {
      name: "Dr. Hendra",
      role: "Peneliti Agrikultur",
      comment: "Teknologi IoT yang diterapkan sangat efisien dalam penggunaan air. Sangat cocok untuk masa depan ruang urban.",
      rating: 5
    }
  ];

  return (
   <section id="testimoni" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal">
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            Dipercaya oleh <span className="text-green-600">ratusan</span> pejuang pangan
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            Ulasan nyata dari para pengguna yang telah beralih ke ekosistem pintar AgriSmart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="reveal bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 text-sm italic mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">{review.name}</p>
                  <p className="text-xs text-zinc-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}