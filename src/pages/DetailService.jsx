import { AnimatedBackground, Button, Card, LazyImage } from "../components";
import { useParams } from "react-router-dom";
import {
  ourApproach,
  services,
  webDevelopmentSteps,
  websiteType,
} from "../constant";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useRef, useState } from "react";
import { ApproachList, CourseForm, WebsiteTypeList } from "../fragments";

const DetailService = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.link === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();
  const [kelas, setKelas] = useState("Reguler");

  const valueOptions = ["Reguler", "Privat"];
  const optionDescription = [
    "Kelas Reguler: Materi sesuai kurikulum, jadwal tetap, peserta gabungan.",
    "Kelas Privat: Jadwal fleksibel & materi bisa dikustom sesuai kebutuhan.",
  ];

  if (!service) {
    return <p className="text-center py-10">Layanan tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      service.link == "kursus-komputer"
        ? "https://script.google.com/macros/s/AKfycbzU9vdY8GDitmr2pDUDpKfbtC9bKMEdk4Z0nsnczdTz_KitPY0yNMhHe3m0JIGK-NtM/exec"
        : "https://script.google.com/macros/s/AKfycbwhHOazYCDXLLG9X_DF50KCzAiF97sC3FBPnvtM1smthCJIocCFV5xtJSTNHaQM708X/exec";
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
        form.current.reset();
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
        text: "Terima kasih sudah mendaftar! Kami akan menghubungi Anda segera.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: FiXCircle,
        text: "Maaf ada kesalahan ketika mendaftar. Mohon coba lagi.",
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
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {service.link == "kursus-komputer" ||
        service.link == "kursus-pemrograman" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Information */}
            <div className="flex flex-col justify-between p-6 sm:p-8">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold heading leading-tight mt-3">
                {service.heading}
              </h2>
              <p className="color-description mt-6 text-lg leading-relaxed">
                {service.longDescription}
              </p>

              {/* Daftar Materi */}
              <h3 className="mt-10 mb-6 font-semibold text-2xl heading">
                Apa yang Akan Dipelajari?
              </h3>
              <ul className="space-y-5">
                {service.featuresDetail.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <FiCheckCircle className="h-7 w-7 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-lg heading">
                        {item.title}
                      </p>
                      <p className="color-description text-base">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
              <CourseForm
                handleSubmit={handleSubmit}
                form={form}
                value={kelas}
                setKelas={setKelas}
                valueOptions={valueOptions}
                optionDescription={optionDescription}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-24 mx-auto">
            {/* Main content */}
            <section
              id="header"
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
            >
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-bold heading leading-tight mt-3">
                  {service.heading}
                </h2>
                <p className="color-description text-lg leading-relaxed">
                  {service.shortDescription}
                </p>
                <Button style={"w-fit!"}>
                  <a href="#step">Buat Websitemu Sekarang</a>
                </Button>
              </div>
              <LazyImage
                src="/src/assets/web-development.svg"
                className={"md:w-3/4 justify-self-center lg:justify-self-end"}
              />
            </section>

            {/* Steps */}
            <section className="py-12" id="step">
              <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 heading">
                  Langkah Pembuatan Website
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {webDevelopmentSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="heading text-6xl font-bold absolute opacity-10">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <step.icon className="text-sky-600 dark:text-slate-50 text-4xl mb-4" />
                      <h3 className="text-lg font-semibold mt-2 heading">
                        {step.title}
                      </h3>
                      <p className="color-description text-sm mt-2">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold heading">Pendekatan Kami</h2>
                <p className="mt-2 color-description">
                  Metode kerja yang terstruktur untuk menghasilkan solusi yang
                  tepat dan berkelanjutan.
                </p>
              </div>

              <ApproachList approaches={ourApproach} />
            </section>

            {/* Website Type */}
            <section id="web-type" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold heading">
                  Pilihan Jenis Website yang Dapat Dibuat
                </h2>
                <p className="mt-2 color-description">
                  Beragam jenis website yang dapat kami buat untuk mendukung
                  kebutuhan Anda.
                </p>
              </div>

              <WebsiteTypeList typeWebsite={websiteType} />
            </section>
          </div>
        )}
      </div>
    </article>
  );
};

export default DetailService;
