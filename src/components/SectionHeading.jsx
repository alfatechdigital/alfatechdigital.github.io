const SectionHeading = ({ heading, style }) => {
  return (
    <h2
      className={`text-xl sm:text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl ${style}`}
    >
      {heading}
    </h2>
  );
};

export default SectionHeading;
