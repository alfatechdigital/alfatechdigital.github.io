const Principle = (principle) => {
  return (
    <div key={principle.title}>
      <div className="relative">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${principle.gradient} text-white shadow-lg`}
        >
          <principle.icon size={28} />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          {principle.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          {principle.description}
        </p>
      </div>
    </div>
  );
};

export default Principle;
