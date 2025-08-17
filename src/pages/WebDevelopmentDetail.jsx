import { FaChevronDown, FaWhatsapp } from "react-icons/fa6";
import headingSvg from "/src/assets/web-development.svg";
import {
  Button,
  LazyImage,
  SectionHeading,
  SectionSubHeading,
} from "../components";
import { TemplateList, WhyChooseUsList } from "../fragments";
import PricingSection from "../fragments/PricingCard";
import { useState } from "react";
import { websiteCategories } from "../constant";

const WebDevelopmentDetail = ({
  service,
  whychooseUsWeb,
  websiteTemplates,
}) => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [open, setOpen] = useState(false);
  return (
    <div className="md:space-y-24 mx-auto">
      {/* Heading */}
      <section
        id="header"
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl px-8 mx-auto"
      >
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold heading leading-tight mt-3">
            {service.heading}
          </h2>
          <p className="color-description text-lg leading-relaxed">
            {service.shortDescription}
          </p>
          <Button style={"w-fit!"}>
            <a
              href="https://api.whatsapp.com/send?phone=6285183103693&text=Halo%20Alfatech,%20Mau%20konsultasi%20tentang%20pembuatan%20website"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaWhatsapp /> Konsultasi Gratis
            </a>
          </Button>
        </div>
        <LazyImage
          src={headingSvg}
          className={"md:w-3/4 justify-self-center lg:justify-self-end"}
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-12" id="step">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SectionHeading
            heading={"Mengapa Memilih Kami"}
            style={"text-center"}
          />
          <SectionSubHeading
            subHeading={
              "Solusi edukatif yang dirancang untuk memberikan hasil maksimal."
            }
          />

          <WhyChooseUsList
            choices={whychooseUsWeb}
            style={"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left!"}
          />
        </div>
      </section>

      {/* Price */}
      <section id="pricing" className="px-5">
        <SectionHeading
          heading={"Harga Jasa Pembuatan Website"}
          style={"text-center"}
        />
        <SectionSubHeading
          subHeading={
            "Alfatech menawarkan beberapa pilihan paket jasa pembuatan website yang dapat Anda sesuaikan dengan kebutuhan."
          }
        />
        <PricingSection />
      </section>

      {/* Template List */}
      <section id="template" className="px-5">
        <SectionHeading
          heading={"Desain Keren untuk Website Anda"}
          style={"text-center"}
        />
        <SectionSubHeading
          subHeading={"Pilih sesuai tema website yang akan dibuat."}
        />

        {/* Category filters */}
        <div className="mt-12 flex justify-center">
          <div className="relative inline-block text-left">
            {/* Trigger */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 
             rounded-lg shadow-sm hover:bg-gray-50 text-gray-700 cursor-pointer"
            >
              {activeFilter}
              <FaChevronDown
                className={`ml-2 transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-1">
                  {websiteCategories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveFilter(category);
                          setOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm cursor-pointer 
                  ${
                    activeFilter === category
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <TemplateList
          websiteTemplates={websiteTemplates}
          activeFilter={activeFilter}
        />
      </section>
    </div>
  );
};

export default WebDevelopmentDetail;
