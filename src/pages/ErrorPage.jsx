import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen page-background flex flex-col justify-center items-center px-6 overflow-hidden">
      <h1 className="absolute text-[30vw] font-bold text-slate-900/10 dark:text-white/10 z-0 select-none">
        404
      </h1>

      <div className="z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900/50 dark:text-slate-50">
          Ups!{" "}
          <span className="text-slate-900/50 dark:text-white/70">
            Halaman tidak ditemukan.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-900/50 dark:text-white/80">
          Sepertinya kamu tersesat. Tapi jangan khawatir,
          <br />
          kita semua pernah kok nyari yang nggak pasti.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block underline hover:no-underline text-slate-900/50 dark:text-white/90 font-medium"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
