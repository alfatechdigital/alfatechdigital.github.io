import { AnimatedBackgroundElement } from "../components";
import { useParams } from "react-router-dom";
import { services } from "../constant";
import {
  FiCheckCircle,
  FiXCircle,
  FiArrowUpRight,
  FiLoader,
} from "react-icons/fi";
import { useRef, useState } from "react";

const DetailService = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.link === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();
  const [kelas, setKelas] = useState("Reguler");

  if (!service) {
    return <p className="text-center py-10">Layanan tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbzU9vdY8GDitmr2pDUDpKfbtC9bKMEdk4Z0nsnczdTz_KitPY0yNMhHe3m0JIGK-NtM/exec";

    setIsSubmitting(true);
    setSubmitStatus(null);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Nama=${e.target.name.value}&Sekolah=${e.target.school.value}&Kelas=${kelas}&Telepon=${e.target.phone.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setSubmitStatus("success");
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setSubmitStatus("error");
        setIsSubmitting(false);
      });
  };

  const StatusMessage = ({ status }) => {
    if (!status) return null;

    const configs = {
      success: {
        icon: FiCheckCircle,
        text: "Thank you for your message! We'll get back to you soon.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: FiXCircle,
        text: "There was an error sending your message. Please try again.",
        className: "bg-red-50 border-red-200 text-red-800",
      },
    };

    const config = configs[status];
    const Icon = config.icon;

    return (
      <div
        className={`flex items-center p-4 mb-6 border rounded-lg ${config.className}`}
      >
        <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
        <p className="text-sm">{config.text}</p>
      </div>
    );
  };

  return (
    <article className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <AnimatedBackgroundElement />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Information */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            {/* Heading */}
            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              Kursus Komputer Pemula
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
              Pelajari Komputer dari Dasar hingga Mahir
            </h2>
            <p className="text-gray-700 mt-6 text-lg leading-relaxed">
              Cocok untuk anak-anak, orang tua, atau siapa saja yang belum
              pernah menggunakan komputer. Kami akan membimbingmu dari dasar
              sampai bisa membuat dokumen, presentasi, dan tabel dengan percaya
              diri.
            </p>

            {/* Daftar Materi */}
            <h3 className="mt-10 mb-6 font-semibold text-2xl text-gray-900">
              Apa yang Akan Dipelajari?
            </h3>
            <ul className="space-y-5">
              {[
                {
                  title: "Mengenal Perangkat Komputer",
                  desc: "Belajar mengenal monitor, keyboard, mouse, dan fungsi masing-masing.",
                },
                {
                  title: "Menghidupkan & Mematikan Komputer",
                  desc: "Langkah aman menyalakan dan mematikan komputer.",
                },
                {
                  title: "Penggunaan Dasar Komputer",
                  desc: "Membuka, menutup, dan berpindah aplikasi dengan mudah.",
                },
                {
                  title: "Microsoft Word",
                  desc: "Mengetik, mengatur teks, dan menyimpan dokumen.",
                },
                {
                  title: "Microsoft Excel",
                  desc: "Membuat tabel, menghitung otomatis, dan membuat grafik sederhana.",
                },
                {
                  title: "Microsoft PowerPoint",
                  desc: "Membuat slide presentasi menarik dengan gambar dan animasi.",
                },
                {
                  title: "Dasar Internet",
                  desc: "Mencari informasi di Google dan tips aman berselancar.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <FiCheckCircle className="h-7 w-7 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-lg text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-base">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Class */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Pilihan Kelas
              </h3>
              <p className="text-gray-700">
                📚 <strong>Kelas Reguler</strong> — Materi sudah terstruktur
                sesuai silabus, jadwal tetap, dan belajar bersama peserta lain.
              </p>
              <p className="text-gray-700 mt-1">
                🎯 <strong>Kelas Privat</strong> — Peserta dapat <em>custom</em>{" "}
                materi sesuai kebutuhan, jadwal fleksibel, dan fokus 1-on-1
                dengan instruktur.
              </p>
            </div>

            {/* Info Tambahan */}
            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="text-xl font-semibold text-blue-800">
                Belajar Santai, Hasil Maksimal!
              </h4>
              <p className="text-blue-700 mt-2">
                Kursus ini penuh latihan langsung. Kamu akan dibimbing sampai
                benar-benar bisa, tanpa rasa takut atau bingung.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col space-y-4 h-fit">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              id="contact-form-title"
            >
              Segera Daftarkan Diri Anda
            </h2>
            <p className="text-slate-600 mb-4">
              Jika tertarik mengikuti kursus ini, anda dapat mengisi form
              berikut.
            </p>

            <StatusMessage status={submitStatus} />

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-labelledby="contact-form-title"
              ref={form}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Nama Lengkapmu"
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Asal Sekolah <span className="text-red-500">*</span>
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Asal Sekolahmu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Kelas
                </label>
                <select
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Reguler">Reguler</option>
                  <option value="Privat">Privat</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {kelas === "Reguler"
                    ? "Kelas Reguler: Materi sesuai kurikulum, jadwal tetap, peserta gabungan."
                    : "Kelas Privat: Jadwal fleksibel & materi bisa dikustom sesuai kebutuhan."}
                </p>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Nomor Teleponmu"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin mr-2 h-5 w-5" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Daftar
                    <FiArrowUpRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailService;
