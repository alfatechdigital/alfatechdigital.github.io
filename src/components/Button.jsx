const Button = ({ children, isSubmitting, type, style }) => {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      className={`w-full bg-slate-900 dark:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-slate-600/20 hover:shadow-xl hover:shadow-slate-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center cursor-pointer ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
