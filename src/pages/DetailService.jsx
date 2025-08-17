import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { AnimatedBackground } from "../components";
import { services, websiteTemplates, whychooseUsWeb } from "../constant";
import CourseDetail from "./CourseDetail";
import WebDevelopmentDetail from "./WebDevelopmentDetail";

const DetailService = () => {
  const { slug } = useParams();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [kelas, setKelas] = useState("Reguler");
  const service = services.find((s) => s.link === slug);
  const valueOptions = ["Reguler", "Privat"];
  const optionDescription = [
    "Kelas Reguler: Materi sesuai kurikulum, jadwal tetap, peserta gabungan.",
    "Kelas Privat: Jadwal fleksibel & materi bisa dikustom sesuai kebutuhan.",
  ];

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

      <div className="relative py-32">
        {service.link == "kursus-komputer" ||
        service.link == "kursus-pemrograman" ? (
          <CourseDetail
            service={service}
            submitStatus={submitStatus}
            handleSubmit={handleSubmit}
            form={form}
            kelas={kelas}
            setKelas={setKelas}
            valueOptions={valueOptions}
            optionDescription={optionDescription}
            isSubmitting={isSubmitting}
            statusMessage={StatusMessage}
          />
        ) : (
          <WebDevelopmentDetail
            service={service}
            whychooseUsWeb={whychooseUsWeb}
            websiteTemplates={websiteTemplates}
          />
        )}
      </div>
    </article>
  );
};

export default DetailService;
