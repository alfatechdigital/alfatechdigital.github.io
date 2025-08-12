import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CtaButton = ({ link, description, style }) => {
  return (
    <Link
      to={link}
      className={`px-8 py-4 rounded-full bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 font-medium hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-0.5 group inline-flex items-center ${style}`}
    >
      {description}
      <FiArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
};

export default CtaButton;
