import { menuItems, socialLinks, contactInfo } from "../constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                PT. Alfatech Digital Solutions
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Mewujudkan visi digital menjadi kenyataan. Kami menciptakan solusi
              inovatif yang membantu bisnis berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Tautan Cepat
            </h3>
            <ul className="space-y-4">
              {menuItems.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Kontak Kami
            </h3>
            <ul className="space-y-4">
              {contactInfo.slice(0, -1).map((item) => (
                <li
                  className="flex items-center text-slate-300"
                  key={item.title}
                >
                  <item.icon className="w-5 h-5 mr-3 text-violet-400" />
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Alfatech Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
