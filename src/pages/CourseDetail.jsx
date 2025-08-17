import { FiCheckCircle } from "react-icons/fi";
import CourseForm from "../fragments/CourseForm";

const CourseDetail = ({
  service,
  submitStatus,
  handleSubmit,
  form,
  kelas,
  setKelas,
  valueOptions,
  optionDescription,
  isSubmitting,
  statusMessage: StatusMessage,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
      {/* Information */}
      <div className="flex flex-col justify-between ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold heading leading-tight mt-3">
          {service.heading}
        </h2>
        <p className="color-description mt-6 text-lg leading-relaxed">
          {service.longDescription}
        </p>

        {/* Daftar Materi */}
        <h3 className="mt-10 mb-6 font-semibold text-2xl heading">
          Apa yang Akan Dipelajari?
        </h3>
        <ul className="space-y-5">
          {service.featuresDetail.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <FiCheckCircle className="h-7 w-7 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-lg heading">{item.title}</p>
                <p className="color-description text-base">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col space-y-4 h-fit">
        <h2
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
          id="contact-form-title"
        >
          Segera Daftarkan Diri Anda
        </h2>
        <p className="text-slate-600 mb-4">
          Jika tertarik mengikuti kursus ini, anda dapat mengisi form berikut.
        </p>

        <StatusMessage status={submitStatus} />
        <CourseForm
          handleSubmit={handleSubmit}
          form={form}
          value={kelas}
          setKelas={setKelas}
          valueOptions={valueOptions}
          optionDescription={optionDescription}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default CourseDetail;
