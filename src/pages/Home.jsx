import { Link } from "react-router-dom";
import { services, choices } from "../constant";
import { FiArrowUpRight } from "react-icons/fi";

import { ServicesList, WhyChooseUsList } from "../fragments";
import {
  SectionHeading,
  SectionSubHeading,
  AnimatedBackgroundElement,
  CTAButton,
} from "../components";

const Home = () => {
  return (
    <article className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <AnimatedBackgroundElement />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-20 mx-auto">
          {/* Main content */}
          <section id="main-content" className="text-center space-y-6">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight heading lg:text-8xl">
              Mulai Langkah
              <span className="block mt-2 gradient bg-clip-text text-transparent">
                Digitalmu Hari Ini
              </span>
            </h1>
            <p className="text-xl sub-heading leading-relaxed max-w-2xl mx-auto">
              Alfatech Digital Solution hadir untuk membantu Anda mengembangkan
              keterampilan digital dan mewujudkan ide menjadi solusi nyata.
            </p>
          </section>

          {/* CTA buttons */}
          <section id="about-cta-button" className="text-center">
            <CTAButton
              link="/about"
              description="Mari Berkenalan Dengan Kami"
            />
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
            <ServicesList services={services} showLink={false} />

            {/* CTA button */}
            <section id="service-cta-button" className="text-center mt-10">
              <CTAButton link="/services" description="Lihat Layanan Kami" />
            </section>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Home;
