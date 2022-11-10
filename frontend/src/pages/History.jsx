import React, { useState, useEffect } from "react";
import "../App.css";
import HistoryField from "../components/HistoryField";
import { getScores } from "../api/DataFetching";
import Navbar from "../components/navBar";

export default function History(props) {
  const [golfData] = useState(props.data);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    getScores(setScoreData);
  }, []);

  if(scoreData.length === 0){
    return (<h1>LOADING...</h1>)
  }

  scoreData.sort((a, b) => b.id - a.id);

  return (
    <>
      <div>
        <Navbar />
        <HistoryField scores={scoreData} golfData={golfData} />
      </div>
    </>
  );
}
