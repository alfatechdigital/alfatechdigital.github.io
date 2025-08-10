const Option = ({
  label,
  value,
  valueOptions,
  setKelas,
  optionDescription,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => setKelas(e.target.value)}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 outline-0"
      >
        <option value={valueOptions[0]}>{valueOptions[0]}</option>;
        <option value={valueOptions[1]}>{valueOptions[1]}</option>;
      </select>
      <p className="text-xs text-gray-500 mt-1">
        {value === valueOptions[0]
          ? optionDescription[0]
          : optionDescription[1]}
      </p>
    </div>
  );
};

export default Option;
