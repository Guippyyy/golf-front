import React, { useState } from "react";
import "../App.css";
import "../pages/history.css";
import PaginatedItems from "../components/paginate";
export default function HistoryField(props) {
  const scores = props.scores;
  const [golfData] = useState(props.golfData);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const scoresSliced = scores.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="kont" id="scroll">
        {scoresSliced.map((score) => (
          <div className="vakken" style={{ backgroundColor: "white" }}>
            <span className="logos2 grid-vak-logo" id="span1">
              <img
                id="logo-golf2"
                src={`${golfData[score.coursID - 1].image}`}
                alt="y"
              />
            </span>
            <span className="grid-vak-naam" id="text">
              {golfData[score.coursID - 1].name}
            </span>
            <span className="grid-vak-date" id="text">
              {new Date(score.createdAt).toLocaleDateString()}
            </span>

            <span className="grid-vak-result" id="text">
              {score.result}
            </span>
            <a className="grid-vak-button" href="/">
              show more
            </a>
          </div>
        ))}
        <div>
          <PaginatedItems
            scoresPerPage={postsPerPage}
            total={scores.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
