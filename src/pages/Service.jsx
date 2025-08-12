import {
  AnimatedBackground,
  SectionHeading,
  SectionSubHeading,
} from "../components";
import { services } from "../constant";
import { ServicesList } from "../fragments";

const Service = () => {
  return (
    <article className="relative min-h-screen">
      {/* Animated background elements */}
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8 py-32">
        {/* Section Header */}
        <section id="header">
          <SectionHeading heading={"Layanan Kami"} style={"text-center"} />
          <SectionSubHeading
            subHeading={"Solusi terbaik untuk kebutuhan Anda."}
          />
        </section>

        {/* Main COntent */}
        <section id="services">
          <ServicesList services={services} showLink={true} />
        </section>
      </div>
    </article>
  );
};

export default Service;
