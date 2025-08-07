import { Link } from "react-router-dom";
import { services, choices } from "../constant";
import { FiArrowUpRight } from "react-icons/fi";

import { ServicesList, WhyChooseUsList } from "../fragments";
import {
  SectionHeading,
  SectionSubHeading,
  AnimatedBackgroundElement,
} from "../components";

const Home = () => {
  return (
    <article className="relative min-h-screen flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Animated background elements */}
      <AnimatedBackgroundElement />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-20 mx-auto">
          {/* Main content */}
          <section id="main-content" className="text-center space-y-6">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 lg:text-8xl">
              Mulai Langkah
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digitalmu Hari Ini
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Alfatech Digital Solution hadir untuk membantu Anda mengembangkan
              keterampilan digital dan mewujudkan ide menjadi solusi nyata.
            </p>
          </section>

          {/* CTA buttons */}
          <section id="cta-button" className="text-center">
            <Link
              to="/services"
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center"
            >
              Lihat Layanan Kami
              <FiArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </section>

          {/* Why Choose Us */}
          <section id="why-choose-us">
            <SectionHeading
              heading={"Mengapa Memilih Kami"}
              style={"text-center"}
            />
            <SectionSubHeading
              subHeading={
                "Solusi edukatif yang dirancang untuk memberikan hasil maksimal."
              }
            />
            <WhyChooseUsList choices={choices} />
          </section>

          {/* Services */}
          <section id="services">
            <SectionHeading heading={"Layanan Kami"} style={"text-center"} />
            <SectionSubHeading
              subHeading={
                "Kami memberikan layanan edukasi dan solusi digital dalam satu tempat."
              }
            />
            <ServicesList services={services} />
          </section>
        </div>
      </div>
    </article>
  );
};

export default Home;
