import LazyImage from "./LazyImage";
import logoImg from "../assets/logo.webp";
import { principles } from "../constant";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen py-32 bg-slate-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Kenali Kami
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Lebih Dekat
            </span>
          </h2>
        </div>

        {/* About */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 border-t-8 border-indigo-600">
          {/* heading */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b border-slate-300 pb-2 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Tentang Kami
            </h2>
            {/* Legality Modal Button */}
            <button
              onClick={openModal}
              className="justify-self-start md:justify-self-end px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition group inline-flex items-center cursor-pointer"
            >
              Legalitas
              <GrCertificate className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 space-y-16">
            {/* Logo */}
            <LazyImage src={logoImg} className="w-10/12 md:w-1/3 mx-auto" />

            {/* Description */}
            <div className="text-gray-700 space-y-4 text-sm sm:text-base">
              <p>
                <strong>PT Alfatech Digital Solutions</strong> adalah perusahaan
                yang bergerak di bidang pelatihan komputer, kursus pemrograman,
                dan layanan pembuatan website profesional.
              </p>
              <p>
                Kami berkomitmen untuk menyediakan pelatihan digital yang
                berkualitas dan aplikatif bagi individu, pelajar, maupun
                instansi. Selain itu, kami juga melayani pengembangan website
                yang disesuaikan dengan kebutuhan klien secara optimal.
              </p>
              <p>
                Didukung oleh tenaga pengajar dan tim teknis yang kompeten,
                Alfatech selalu mengutamakan kualitas, ketepatan, dan kepuasan
                klien dalam setiap layanan yang diberikan.
              </p>
            </div>

            {/* Principle Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <div className="relative">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${principle.gradient} text-white shadow-lg`}
                    >
                      <principle.icon size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="p-2 rounded-full bg-transparent text-slate-600 absolute top-2 left-3 hover:bg-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <FaXmark size={25} />
            </button>

            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://drive.google.com/file/d/13gN-BAjNuwzYWEzEJN5Kn610dGMvWkf1/preview"
                title="Visi Misi Alfatech"
                width="100%"
                height="500"
                allow="autoplay"
                className="w-full h-[500px] rounded-b-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
