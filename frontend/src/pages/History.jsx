import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
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
                  <Link to="/scoreCard">Scorecard</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/"> profile</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/history">history</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/Stats">statistics</Link>
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
