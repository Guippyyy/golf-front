import React, {useMemo} from "react";
import "../styles/pagination.css"

export default function PaginatedItems({ total, scoresPerPage ,paginate }) {

  const pageNumber = useMemo(() => pages(scoresPerPage, total), [scoresPerPage, total])
  return (
    <>
      <nav>
        <ul className="nav-list">
          {pageNumber.map((num) => (
            <li  className="page-item">
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

function pages(scoresPerPage, total) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / scoresPerPage); i++) {
    pageNumber.push(i);
  }
  return pageNumber
}