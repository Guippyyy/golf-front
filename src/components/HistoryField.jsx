import React, { useState } from "react";
import "../App.css";
import "../styles/history.css";
import PaginatedItems from "../components/paginate";
import Collapsible from "./Collapsible";
export default function HistoryField(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const golfData = props.golfData
  const scoreData = props.scores

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  scoreData.sort((a,b) => b.id-a.id);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const scoresSliced = scoreData.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="vak" id="scroll">
        {scoresSliced.map((score) => (
          <div className="vakken" style={{ backgroundColor: "white" }}>
            <span className="logos2 grid-vak-logo" id="span1">
              <img
                id="logo-golf2"
                src={`${golfData[score.coursID - 1]?.image}`}
                alt="y"
              />
            </span>
            <span className="grid-vak-naam" id="text">
              {golfData[score.coursID - 1]?.name}
            </span>
            <span className="grid-vak-date" id="text">
              {new Date(score.createdAt).toLocaleDateString()}
            </span>

            <span className="grid-vak-result" id="text">

              { score.result > 0 ? '+'+score.result : score.result }

            </span>
            
            <span className="grid-table-review">
              <Collapsible golfData={golfData} scoreData={scoresSliced} tel={score.coursID}/>
            </span>
            
          </div>
        ))}
        <div>
          <PaginatedItems
            scoresPerPage={postsPerPage}
            total={scoreData.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}