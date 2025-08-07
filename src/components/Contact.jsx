import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiLoader,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import { contactInfo } from "../constant";

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
        text: "Thank you for your message! We'll get back to you soon.",
        className: "bg-green-50 border-green-200 text-green-800",
      },
      error: {
        icon: FiXCircle,
        text: "There was an error sending your message. Please try again.",
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
    <section
      className="relative py-20 sm:py-24 bg-white"
      aria-label="Contact Us Section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact form */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full flex flex-col justify-between">
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

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-labelledby="contact-form-title"
              ref={form}
            >
              <div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                    placeholder="Nama Lengkapmu"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Surel <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Alamat Surelmu"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Nomor Teleponmu"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subjek <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200"
                  placeholder="Subjek Surel"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
                  placeholder="Tulis Pesanmu"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin mr-2 h-5 w-5" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <FiArrowUpRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div className="lg:pl-8 flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Informasi Kontak
              </h2>

              {contactInfo.map((item) => (
                <div
                  className="relative flex items-start space-x-4"
                  key={item.title}
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
