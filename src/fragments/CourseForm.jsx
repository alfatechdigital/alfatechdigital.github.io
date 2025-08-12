import { Button, Input, Option } from "../components";
import { FiArrowUpRight, FiLoader } from "react-icons/fi";

const CourseForm = ({
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
        name={"name"}
        label={"Nama Lengkap"}
        inputType={"text"}
        placeholder={"Nama Lengkap Anda"}
      />
      <Input
        name={"school"}
        label={"Asal Sekolah"}
        inputType={"text"}
        placeholder={"Asal Sekolah Anda"}
      />
      <Input
        name={"phone"}
        label={"Nomor Telepon"}
        inputType={"number"}
        placeholder={"Nomor Telepon Anda"}
      />
      <Option
        label={"Pilih Jenis Kelas"}
        value={value}
        setKelas={setKelas}
        valueOptions={valueOptions}
        optionDescription={optionDescription}
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

export default CourseForm;
