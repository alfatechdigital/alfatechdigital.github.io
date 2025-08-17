import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { LazyImage, Modal } from "../components";

const TemplateList = ({ websiteTemplates, activeFilter }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const ITEMS_PER_PAGE = 6;

  // buat item dengan id otomatis
  const galleryItems = websiteTemplates.map((item, index) => ({
    id: index + 1,
    ...item,
  }));

  // filter sesuai kategori
  const filteredItems = galleryItems.filter(
    (project) => activeFilter === "Semua" || project.category === activeFilter
  );

  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentItems = filteredItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // reset page ke 0 setiap kali filter berubah
  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  // disable scroll ketika modal terbuka
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer rounded-xl shadow hover:shadow-lg transition overflow-hidden 
                       bg-white dark:border dark:border-gray-700"
          >
            <LazyImage
              className={"w-full object-cover"}
              alt={item.title}
              src={item.img}
            />
            {/* <div className="p-4 text-center font-medium text-gray-800 ">
              {item.title}
            </div> */}
          </div>
        ))}
      </div>

      {/* Pagination hanya muncul kalau item > 6 */}
      {filteredItems.length > ITEMS_PER_PAGE && (
        <ReactPaginate
          previousLabel={"« Prev"}
          nextLabel={"Next »"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          forcePage={currentPage} // biar sinkron
          containerClassName="flex justify-center space-x-2 text-sm text-gray-800 dark:text-gray-200"
          pageClassName="border border-gray-300 dark:border-gray-600 rounded"
          pageLinkClassName="block px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          activeClassName="bg-blue-600 text-white"
          previousClassName="border border-gray-300 dark:border-gray-600 rounded"
          previousLinkClassName="block px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          nextClassName="border border-gray-300 dark:border-gray-600 rounded"
          nextLinkClassName="block px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          breakClassName="px-3 py-1"
        />
      )}

      {/* Modal */}
      {selectedItem && (
        // <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        //   <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
        //     {/* Close button */}
        //     <button
        //       onClick={() => setSelectedItem(null)}
        //       className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        //     >
        //       ✕
        //     </button>

        //     <LazyImage
        //       className={"w-full h-64 object-cover rounded-lg mb-4"}
        //       alt={selectedItem.title}
        //       src={selectedItem.img}
        //     />

        //     <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        //       {selectedItem.title}
        //     </h2>
        //     <p className="text-gray-600 dark:text-gray-300 mb-4">
        //       {selectedItem.description}
        //     </p>

        //     {/* Action buttons */}
        //     <div className="flex justify-end space-x-3">
        //       <a
        //         href={selectedItem.demoUrl}
        //         target="_blank"
        //         className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        //       >
        //         Live Preview
        //       </a>
        //     </div>
        //   </div>
        // </div>
        <Modal
          closeModal={() => setSelectedItem(null)}
          data={
            <div className="p-6">
              <LazyImage
                className={"w-full h-64 object-cover rounded-lg mb-4"}
                alt={selectedItem.title}
                src={selectedItem.img}
              />

              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {selectedItem.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedItem.description}
              </p>

              {/* Action buttons */}
              <div className="flex justify-end space-x-3">
                <a
                  href={selectedItem.demoUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Live Preview
                </a>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default TemplateList;
