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
      className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between w-full md:w-[380px] ${
        recommended
          ? "border-2 border-blue-600 bg-white relative scale-105 z-10 shadow-2xl shadow-blue-100"
          : "border border-gray-200 bg-white shadow-sm hover:shadow-md"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-6 py-1.5 rounded-full font-bold uppercase tracking-widest">
          Paling Populer
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-gray-900 capitalize">{title}</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed min-h-[40px]">{subtitle}</p>

        <div className="mt-8 flex items-baseline gap-1">
          <span className="text-sm font-semibold text-gray-400">Rp</span>
          <span className="text-4xl font-bold text-gray-900">
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
              ? "bg-blue-600 hover:bg-blue-700 text-white" 
              : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
          }`}
        >
          Pesan Sekarang
        </a>

        <button
          className="mt-6 w-full text-gray-400 hover:text-blue-600 text-xs font-bold flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
          onClick={() => setShowFeatures(!showFeatures)}
        >
          {showFeatures ? "Tutup Fitur" : "Lihat Fitur"}
          <span className={`transition-transform duration-300 ${showFeatures ? "rotate-180" : ""}`}>▾</span>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showFeatures ? "max-h-[300px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="leading-tight">{item}</span>
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
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Daftar Harga</h2>
          <p className="text-gray-500 mt-4">Transparan tanpa biaya tersembunyi.</p>
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
