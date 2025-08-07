import { useEffect, useState } from "react";
import {
  AnimatedBackgroundElement,
  LazyImage,
  Modal,
  SectionHeading,
  SectionSubHeading,
} from "../components";
import { GrCertificate } from "react-icons/gr";
import logoImg from "../assets/logo.webp";
import { PrincipleList } from "../fragments";
import { principles } from "../constant";

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
    <article className="relative min-h-screen py-32 bg-slate-50">
      {/* Animated background elements */}
      <AnimatedBackgroundElement />

      <div className="relative max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <section id="header">
          <SectionHeading
            heading={"Kenali Kami Lebih Dekat"}
            style={"text-center"}
          />
          <SectionSubHeading
            subHeading={
              "Menjadi Mitra Digital Anda dalam Pendidikan dan Teknologi"
            }
          />
        </section>

        {/* Main*/}
        <section id="main-content">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8 border-t-8 border-indigo-600">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b border-slate-300 pb-2 mb-6">
              <SectionHeading heading={"Tentang Kami"} />
              {/* Legality Modal Button */}
              <button
                onClick={openModal}
                className="justify-self-start md:justify-self-end px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition group inline-flex items-center cursor-pointer"
              >
                Legalitas
                <GrCertificate className="ml-2" />
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 space-y-16">
              {/* Logo */}
              <LazyImage src={logoImg} className="w-10/12 md:w-1/3 mx-auto" />

              {/* Description */}
              <div className="text-gray-700 space-y-4 text-sm sm:text-base">
                <p>
                  <strong>PT Alfatech Digital Solutions</strong> adalah
                  perusahaan yang bergerak di bidang pelatihan komputer, kursus
                  pemrograman, dan layanan pembuatan website profesional.
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

              {/* Principle */}
              <PrincipleList principles={principles} />
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          data={
            <iframe
              src="https://drive.google.com/file/d/13gN-BAjNuwzYWEzEJN5Kn610dGMvWkf1/preview"
              title="Visi Misi Alfatech"
              width="100%"
              height="500"
              allow="autoplay"
              className="w-full h-[500px] rounded-b-lg"
            />
          }
        />
      )}
    </article>
  );
};

export default About;
