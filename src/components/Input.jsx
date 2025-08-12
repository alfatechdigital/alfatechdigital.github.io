const Input = ({ name, label, inputType, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={inputType}
        required
        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 outline-0"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
