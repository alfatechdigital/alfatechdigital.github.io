import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardWithList = (service) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative space-y-6">
        <service.icon size={50} className="text-indigo-600" />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            {service.label}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <FiCheckCircle className="w-4 h-4 mr-2 text-violet-600" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-slate-100">
          <Link
            to="/services"
            className="group inline-flex items-center text-sm font-medium text-slate-900 hover:text-violet-600 transition opacity-0 group-hover:opacity-100 duration-300"
          >
            Pelajari Lebih Lanjut
            <FiArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardWithList;
