import { useState } from "react";

const PricingCard = ({
  title,
  subtitle,
  price,
  yearly,
  features,
  recommended,
  link,
}) => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div
      className={`p-8 rounded-3xl transition-all duration-500 flex flex-col justify-between w-full md:w-[380px] ${
        recommended
          ? "border-2 border-orange-400 bg-white relative scale-105 z-10 shadow-[0_20px_50px_rgba(251,146,60,0.15)]"
          : "border border-gray-100 bg-white/80 backdrop-blur-sm shadow-xl shadow-gray-200/50"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-[10px] px-5 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-lg">
          Paling Populer
        </div>
      )}

      <div>
        <h3 className="text-2xl font-black text-gray-900 capitalize tracking-tight">{title}</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed min-h-[40px]">{subtitle}</p>

        <div className="mt-8 flex items-baseline gap-1">
          <span className="text-sm font-semibold text-gray-400">Rp</span>
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
            {price.toLocaleString("id-ID")}
          </span>
        </div>
        
        <div className="mt-1 text-gray-400 text-xs font-medium">
          {yearly > 0 ? `Perpanjang: Rp ${yearly.toLocaleString("id-ID")} /tahun` : "Sekali bayar, tanpa langganan"}
        </div>
      </div>

      <div className="mt-8">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`block w-full text-center py-4 rounded-2xl font-bold transition-all active:scale-95 ${
            recommended 
              ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-200 hover:brightness-110" 
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          Pesan Sekarang
        </a>

        <button
          className="mt-5 w-full text-gray-400 hover:text-blue-500 text-xs font-bold flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
          onClick={() => setShowFeatures(!showFeatures)}
        >
          {showFeatures ? "Sembunyikan Fitur" : "Lihat Detail Fitur"}
          <span className={`text-lg transition-transform duration-300 ${showFeatures ? "rotate-180" : ""}`}>▾</span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showFeatures ? "max-h-[300px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-5">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="leading-tight font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const data = [
    {
      title: "Basic",
      subtitle: "Solusi hemat untuk profil bisnis yang profesional",
      price: 500000,
      yearly: 0,
      features: [
        "Up to 5 Halaman Website",
        "Revisi sampai sesuai",
        "Free Support 1 Bulan",
        "Kecepatan Akses Standar",
      ],
      recommended: false,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo...",
    },
    {
      title: "Premium",
      subtitle: "Kapasitas penuh untuk skala usaha yang berkembang",
      price: 1500000,
      yearly: 500000,
      features: [
        "10 Halaman Website Utama",
        "Prioritas Revisi Utama",
        "Full Support & Konsultasi",
        "Optimalisasi SEO Dasar",
        "Integrasi WhatsApp Chat",
      ],
      recommended: true,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo...",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-24 px-6 overflow-hidden">
      {/* Ornamen Background: Lingkaran Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] bg-orange-100/40 rounded-full blur-[100px]"></div>
      </div>

      {/* Ornamen Background: Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase">Pricing Plan</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-3">Investasi Digital Anda</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 md:gap-8">
          {data.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
