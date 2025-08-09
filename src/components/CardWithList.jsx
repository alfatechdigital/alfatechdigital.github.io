import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardWithList = ({
  icon: Icon,
  label,
  description,
  features,
  link,
  showLink,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative space-y-6">
        <Icon size={50} className="text-sky-600" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">{label}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <FiCheckCircle className="w-4 h-4 mr-2 text-blue-600" />
              {feature}
            </li>
          ))}
        </ul>

        {showLink && (
          <div className="pt-6 border-t border-slate-100">
            <Link
              to={link}
              className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition lg:opacity-0 lg:group-hover:opacity-100 duration-300"
            >
              Pelajari Lebih Lanjut
              <FiArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWithList;
