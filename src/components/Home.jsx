import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiGlobe,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";
import { FaChalkboardUser } from "react-icons/fa6";
import { services } from "../constant";

const Hero = () => {
  const stats = [
    { number: "5+ Tahun", label: "Pengalaman di Industri TI" },
    { number: "10+", label: "Proyek Aplikasi & IT Sukses" },
    { number: "20+", label: "Klien dari Berbagai Sektor" },
    { number: "1-on-1", label: "Pendekatan Personal untuk Tiap Klien" },
  ];

  const choices = [
    {
      icon: FiBookOpen,
      label: "Pembelajaran Dari Dasar",
      description: "Materi disusun dengan bahasa sederhana dan bertahap.",
    },
    {
      icon: FiTool,
      label: "Pendekatan Praktis",
      description:
        "Langsung praktik! Belajar sambil mengerjakan proyek nyata agar lebih mudah dipahami dan diterapkan.",
    },
    {
      icon: FaChalkboardUser,
      label: "Instruktur Berpengalaman",
      description:
        "Didampingi oleh pengajar yang ahli di bidangnya dan siap membimbing hingga tuntas.",
    },
    {
      icon: FiGlobe,
      label: "Solusi Digital Terpadu",
      description:
        "Selain kursus, kami juga menyediakan layanan pembuatan website untuk kebutuhan bisnis.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-20 mx-auto">
          {/* Main content */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 lg:text-8xl">
              Mulai Langkah
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digitalmu Hari Ini
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Alfatech Digital Solution hadir untuk membantu Anda mengembangkan
              keterampilan digital dan mewujudkan ide menjadi solusi nyata.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="text-center">
            <Link
              to="/services"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center"
            >
              Lihat Layanan Kami
              <FiArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Why choose us */}
          <div>
            <h2 className="text-xl text-center sm:text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
              Mengapa Memilih Kami
            </h2>
            <p className="text-slate-600 leading-relaxed text-center">
              Solusi edukatif yang dirancang untuk memberikan hasil maksimal.
            </p>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {choices.map((choice) => (
                <div
                  key={choice.label}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative space-y-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                    >
                      <choice.icon size={28} />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {choice.label}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {choice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl text-center sm:text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
              Layanan Kami
            </h2>
            <p className="text-slate-600 leading-relaxed text-center">
              Kami memberikan layanan edukasi dan solusi digital dalam satu
              tempat.
            </p>
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative space-y-6">
                    <service.icon size={50} className="text-indigo-600" />
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {service.label}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <FiCheckCircle className="w-4 h-4 mr-2 text-violet-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-slate-100">
                      <Link
                        to="/services"
                        className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-violet-600 transition opacity-0 group-hover:opacity-100 duration-300"
                      >
                        Pelajari Lebih Lanjut
                        <FiArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          {/* <div className="rounded-3xl bg-slate-900 p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10" />
            <div className="relative grid grid-cols-2 gap-12 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-4xl font-bold text-white">{stat.number}</p>
                  <p className="mt-2 text-sm font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
