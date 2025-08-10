import { Input, Option } from "../components";
import { FiArrowUpRight, FiLoader } from "react-icons/fi";

const ComputerCourseForm = ({
  handleSubmit,
  form,
  value,
  setKelas,
  valueOptions,
  optionDescription,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="contact-form-title"
      ref={form}
    >
      <Input
        htmlFor={"name"}
        label={"Nama Lengkap"}
        inputId={"name"}
        inputName={"name"}
        inputType={"text"}
        placeholder={"Nama Lengkap Anda"}
      />
      <Input
        htmlFor={"school"}
        label={"Asal Sekolah"}
        inputId={"school"}
        inputName={"school"}
        inputType={"text"}
        placeholder={"Asal Sekolah Anda"}
      />
      <Input
        htmlFor={"phone"}
        label={"Nomor Telepon"}
        inputId={"phone"}
        inputName={"phone"}
        inputType={"tel"}
        placeholder={"Nomor Telepon Anda"}
      />
      <Option
        label={"Pilih Jenis Kelas"}
        value={value}
        setKelas={setKelas}
        valueOptions={valueOptions}
        optionDescription={optionDescription}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center justify-center cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <FiLoader className="animate-spin mr-2 h-5 w-5" />
            Mengirim...
          </>
        ) : (
          <>
            Daftar
            <FiArrowUpRight className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ComputerCourseForm;
