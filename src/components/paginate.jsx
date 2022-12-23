import React, {useMemo} from "react";
import "../styles/pagination.css"
import { v4 as uuid } from "uuid";
export default function PaginatedItems({ total, scoresPerPage ,paginate }) {

  const pageNumber = useMemo(() => pages(scoresPerPage, total), [scoresPerPage, total])
  return (
    <>
      <nav>
        <ul className="nav-list">
          {pageNumber.map((num) => (
            <li  key={uuid()} className="page-item">
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