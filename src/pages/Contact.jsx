import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { contactInfo } from "../constant";
import { ContactForm } from "../fragments";
import { AnimatedBackground } from "../components";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_jz5p0wq",
        "template_nbm33ys",
        form.current,
        "Ayl4g0uvbSi2spCQP"
      )
      .then(() => {
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
        text: "Terima kasih atas pesannya. Kami akan segera menanggapi.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: FiXCircle,
        text: "Ada masalah ketika mengirim pesan. Coba lagi nanti.",
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
    <article
      className="relative min-h-screen py-20 sm:py-24 page-background"
      aria-label="Contact Us Section"
    >
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact form */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-fit flex flex-col justify-between order-2 lg:order-1">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              id="contact-form-title"
            >
              Hubungi Kami
            </h2>
            <p className="text-slate-600 mb-4">
              Punya pertanyaan atau permintaan khusus? Kirim pesan ke kami kapan
              saja.
            </p>

            <StatusMessage status={submitStatus} />

            <ContactForm
              handleSubmit={handleSubmit}
              form={form}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Contact information */}
          <div className="lg:pl-8 flex flex-col justify-between py-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold heading">
                Informasi Kontak
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1">
                {contactInfo.map((item) => (
                  <div
                    className="relative flex items-start space-x-4"
                    key={item.title}
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl gradient text-white shadow-md">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold heading mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="color-description">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-lg overflow-hidden shadow relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7805286946973!2d112.23263752417115!3d-7.706684726336069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785d5706dea647%3A0x253307097bd8d028!2sJatirejo%2C%20Jombok%2C%20Ngoro%2C%20Jombang%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1755481751310!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
