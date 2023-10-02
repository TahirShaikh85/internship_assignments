import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }).map(
    (_, index) => index + 1
  );

  return (
    <nav className="relative my-6 flex flex-wrap items-center justify-between px-2 py-3 gap-x-4 shadow-md border-none rounded-xl">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-end gap-x-8 ">
        <span className="mr-20 font-bold">
          Assignment Submitted By -{" "}
          <Link className="text-blue-400 font-normal" href="tel:9579267386">
            Tahir Shaikh ❤
          </Link>
        </span>
        <div className="current-page-info">{currentPage} of 10</div>
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            {currentPage !== 1 && (
              <Link
                to={`/page/${currentPage - 1}`}
                onClick={() => onPageChange(currentPage - 1)}
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </Link>
            )}
          </li>

          {pageNumbers.map((pageNumber) => (
            <Link
              key={pageNumber}
              to={`/page/${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${
                currentPage === pageNumber
                  ? "bg-blue-400 text-white"
                  : "bg-white-400 text-gray-500"
              } border border-gray-300 hover:text-gray-800  `}
            >
              {pageNumber}
            </Link>
          ))}
          <li>
            {currentPage !== 10 && (
              <Link
                to={`/page/${currentPage + 1}`}
                onClick={() => onPageChange(currentPage + 1)}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
