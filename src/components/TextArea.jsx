const TextArea = ({ name, label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        required
        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
