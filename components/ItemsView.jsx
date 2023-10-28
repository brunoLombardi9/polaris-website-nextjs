import React, { useEffect, useState } from "react";
import TattoosCard from "./TattoosCard";

const ItemsView = ({ content }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(content.length / itemsPerPage);
  const currentItems = content.slice(indexOfFirstItem, indexOfLastItem);
  const pages = [];

  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [content]);

  return (
    <>
      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center p-5">
        {
          <>
            {currentItems.map((item) => (
              <TattoosCard obj={item} key={item.title} />
            ))}
          </>
        }
      </div> */}


<div className="w-full flex flex-wrap gap-4 items-center justify-center p-5">
        {
          <>
            {currentItems.map((item) => (
              <TattoosCard obj={item} key={item.title} />
            ))}
          </>
        }
      </div>

      <div className="w-full flex gap-3 items-center justify-center">
        {pages.length > 1 &&
          pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`p-4 border-2 rounded hover:opacity-50 ${
                page === currentPage && "bg-orange border-orange text-black"
              }`}
            >
              {page}
            </button>
          ))}
      </div>
    </>
  );
};

export default ItemsView;
