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
      className={`p-6 rounded-lg shadow-lg border transition-all duration-300 ${
        recommended
          ? "border-orange-400 bg-white relative"
          : "border-gray-200 bg-white"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-0 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg font-semibold">
          Recommended
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm">{subtitle}</p>

      <div className="mt-3">
        <span className="inline-block gradient text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          HARGA MULAI
        </span>
      </div>

      <div className="mt-3 text-3xl font-bold text-blue-600">
        Rp {price.toLocaleString("id-ID")}
      </div>
      <div className="text-gray-500 text-sm">
        perpanjang Rp {yearly.toLocaleString("id-ID")} /Tahun
      </div>

      <button className="mt-4 w-full border border-sky-600 hover:bg-sky-700 text-sky-600 hover:text-white cursor-pointer py-2 rounded-lg font-semibold transition">
        <a href={link} target="_blank">
          Beli Sekarang
        </a>
      </button>

      <button
        className="mt-3 text-blue-500 hover:underline text-sm cursor-pointer"
        onClick={() => setShowFeatures(!showFeatures)}
      >
        {showFeatures ? "Tutup" : "Fitur Paket"}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showFeatures ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const data = [
    // {
    //   title: "Lite",
    //   subtitle: "punya website ga harus mahal",
    //   price: 150000,
    //   yearly: 80000,
    //   features: [
    //     "1 Halaman Website Statis",
    //     "Batas waktu revisi 3 hari setelah selesai",
    //   ],
    //   recommended: false,
    //   link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo%20Alfatech,%20Mau%20beli%20paket%20website%20landing%20page",
    // },
    {
      title: "Basic",
      subtitle: "jadikan websitemu agar lebih professional",
      price: 500000,
      yearly: 0,
      features: [
        "up to 5 Halaman Website statis",
        "Revisi sampai oke",
        "Free support 1 bulan",
        "tidak bisa support langganan",
      ],
      recommended: false,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo%20Alfatech,%20Mau%20beli%20paket%20website%20personal",
    },
    
    {
      title: "premium",
      subtitle: "cocok untuk web custom dengan kebutuhan khusus",
      price: 1500000,
      yearly: 500000,
      features: [
        "10 Halaman Website",
        "Revisi sampai oke",
        "Free support 1 bulan",
        "support langganan 500K/tahun",
      ],
      recommended: true,
      link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo%20Alfatech,%20Mau%20beli%20paket%20website%20usaha%20kecil",
    },
    // {
    //   title: "Bisnis",
    //   subtitle: "Untuk kebutuhan skala besar",
    //   price: 2500000,
    //   yearly: 2000000,
    //   features: [
    //     "15 Halaman Website",
    //     "2x Revisi",
    //     "14 Hari Pengerjaan",
    //     "Batas waktu revisi 10 hari setelah selesai",
    //   ],
    //   recommended: true,
    //   link: "https://api.whatsapp.com/send?phone=6285183103693&text=Halo%20Alfatech,%20Mau%20beli%20paket%20website%20bisnis",
    // },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
      {data.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
}
