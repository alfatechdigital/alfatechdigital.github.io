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
      className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 flex flex-col justify-between ${
        recommended
          ? "border-orange-400 bg-white relative scale-105 z-10 shadow-orange-100"
          : "border-gray-200 bg-white"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-md">
          Recommended
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-gray-900 capitalize">{title}</h3>
        <p className="text-gray-500 text-sm mt-1 h-10">{subtitle}</p>

        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
            Harga Mulai
          </span>
        </div>

        <div className="mt-2 text-3xl font-bold text-blue-600">
          Rp {price.toLocaleString("id-ID")}
        </div>
        
        {/* Hanya tampilkan jika biaya perpanjangan > 0 */}
        <div className="text-gray-500 text-xs mt-1 h-4">
          {yearly > 0 ? `Perpanjang Rp ${yearly.toLocaleString("id-ID")} /tahun` : "Tanpa biaya langganan"}
        </div>
      </div>

      <div>
        <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-xl font-semibold transition shadow-md hover:shadow-lg active:scale-95">
          <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
            Beli Sekarang
          </a>
        </button>

        <button
          className="mt-4 w-full text-gray-500 hover:text-blue-600 text-sm font-medium flex items-center justify-center gap-1 transition-colors"
          onClick={() => setShowFeatures(!showFeatures)}
        >
          {showFeatures ? "Tutup Fitur" : "Lihat Fitur Paket"}
          <span className={`transition-transform ${showFeatures ? "rotate-180" : ""}`}>▾</span>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showFeatures ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 text-sm text-gray-600 border-t pt-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                {item}
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
      subtitle: "Jadikan websitemu agar lebih professional",
      price: 500000,
      yearly: 0,
      features: [
        "Up to 5 Halaman Website statis",
        "Revisi sampai oke",
        "Free support 1 bulan",
        "Self-managed (tanpa langganan)",
      ],
      recommended: false,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo...",
    },
    {
      title: "Premium",
      subtitle: "Cocok untuk web custom dengan kebutuhan khusus",
      price: 1500000,
      yearly: 500000,
      features: [
        "10 Halaman Website",
        "Revisi sampai oke",
        "Free support 1 bulan",
        "Support langganan 500K/tahun",
      ],
      recommended: true,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo...",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Pilihan Paket Website</h2>
          <p className="text-gray-600 mt-2">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>
        
        {/* Menggunakan flex agar saat 2 kartu tetap simetris di tengah */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {data.map((plan, index) => (
            <div key={index} className="w-full md:w-[350px]">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
