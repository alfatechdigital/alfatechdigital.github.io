import { FaXmark } from "react-icons/fa6";

const Modal = ({ closeModal, data }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={closeModal}
          className="p-2 rounded-full bg-transparent text-slate-600 absolute top-2 left-3 hover:bg-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <FaXmark size={25} />
        </button>

        <div className="aspect-w-16 aspect-h-9">{data}</div>
      </div>
    </div>
  );
};

export default Modal;
