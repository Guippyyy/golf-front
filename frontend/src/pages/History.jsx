import React, { useState, useEffect} from "react";
import "../App.css";
import HistoryField from "../components/HistoryField";
import { getScores } from "../api/DataFetching"; 

export default function History(props){

  const [golfData] = useState(props.data)
  const [scoreData, setScoreData] = useState([].reverse())
  

  useEffect(() => {
    getScores(setScoreData)
  }, [])
  
  if (scoreData.length === 0) {
    return <div>loading...</div>
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0" id="text">
                <li className="breadcrumb-item">
                  <a href="/scoreCard">Scorecard</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <a href="/"> profile</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="/history">history</a>
                </li>
              </ol>
            </nav>
            <HistoryField scores={scoreData} golfData={golfData}/>
          </div>
        </div>
      </div>
      
    </>
  );
}
