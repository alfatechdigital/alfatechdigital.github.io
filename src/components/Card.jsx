const Card = (item) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative space-y-6">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
        >
          <item.icon size={28} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">{item.label}</h3>
          <p className="text-slate-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
