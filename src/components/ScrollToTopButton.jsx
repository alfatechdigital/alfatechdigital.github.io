import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed border bottom-2 right-2 lg:bottom-5 lg:right-5 z-30 p-3 rounded-full shadow-lg transition-all duration-300 
        ${
          visible
            ? "opacity-100 translate-y-0 bg-slate-900 text-slate-200"
            : "opacity-0 translate-y-4 pointer-events-none"
        } cursor-pointer`}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
