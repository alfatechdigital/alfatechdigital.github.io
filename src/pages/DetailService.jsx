import { AnimatedBackgroundElement } from "../components";
import { useParams } from "react-router-dom";
import { services } from "../constant";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useRef, useState } from "react";
import { ComputerCourseForm } from "../fragments";

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
      <AnimatedBackgroundElement />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Information */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            {/* Heading */}
            <p className="gradient bg-clip-text text-transparent uppercase tracking-widest font-semibold">
              {service.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold heading leading-tight mt-3">
              {service.heading}
            </h2>
            <p className="sub-heading mt-6 text-lg leading-relaxed">
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
                    <p className="font-medium text-lg heading">{item.title}</p>
                    <p className="sub-heading text-base">{item.desc}</p>
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
            <ComputerCourseForm
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
      </div>
    </article>
  );
};

export default DetailService;
