import { Input, TextArea } from "../components";
import { FiArrowUpRight, FiLoader } from "react-icons/fi";

const ContactForm = ({ handleSubmit, form, isSubmitting }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="contact-form-title"
      ref={form}
    >
      <Input
        htmlFor={"fullName"}
        label={"Nama Lengkap"}
        inputId={"fullName"}
        inputName={"fullName"}
        inputType={"text"}
        placeholder={"Nama Lengkap Anda"}
      />
      <Input
        htmlFor={"email"}
        label={"Email"}
        inputId={"email"}
        inputName={"email"}
        inputType={"email"}
        placeholder={"Alamat Surel Anda"}
      />
      <Input
        htmlFor={"phone"}
        label={"Phone"}
        inputId={"phone"}
        inputName={"phone"}
        inputType={"number"}
        placeholder={"Nomor Telepon Anda"}
      />
      <Input
        htmlFor={"subject"}
        label={"Subject"}
        inputId={"subject"}
        inputName={"subject"}
        inputType={"text"}
        placeholder={"Subject Surel"}
      />
      <TextArea
        label={"Pesan"}
        name={"message"}
        placeholder={"Masukkan Pesan Anda"}
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

export default ContactForm;
