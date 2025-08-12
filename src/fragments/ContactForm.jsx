import { Input, TextArea, Button } from "../components";
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
        name={"name"}
        label={"Nama Lengkap"}
        inputType={"text"}
        placeholder={"Nama Lengkap Anda"}
      />
      <Input
        name={"email"}
        label={"Surel"}
        inputType={"email"}
        placeholder={"Alamat Surel Anda"}
      />
      <Input
        name={"phone"}
        label={"Nomor Telepon"}
        inputType={"number"}
        placeholder={"Nomor Telepon Anda"}
      />
      <Input
        name={"subject"}
        label={"Subjek Surel"}
        inputType={"text"}
        placeholder={"Subjek Surel"}
      />
      <TextArea
        label={"Pesan"}
        name={"message"}
        placeholder={"Masukkan Pesan Anda"}
      />
      <Button type={"submit"} isSubmitting={isSubmitting}>
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
      </Button>
    </form>
  );
};

export default ContactForm;
