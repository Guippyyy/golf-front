import React from "react";
import "../components/pagination.css"

export default function PaginatedItems({ scoresPerPage, total, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(total / scoresPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <nav>
        <ul className="nav-list">
          {pageNumber.map((num) => (
            <li key={num} className="page-item">
              <button onClick={() => paginate(num)}  className="page-link">
                {num}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
