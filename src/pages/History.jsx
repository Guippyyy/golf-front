import React from "react";
import "../App.css";
import HistoryField from "../components/HistoryField";
import useGolfCourses  from "../api/DataFetching/useGolfCourses.js";
import { useScores } from "../api/DataFetching/FetchScores";
import { useAuth0 } from "@auth0/auth0-react";

export default function History() {
  const { isAuthenticated } = useAuth0();
  const {golfData, loading, error} = useGolfCourses();
  const {scoreData, loading2, error2} = useScores();
  if ( loading || loading2) return <h1>Loading...</h1>
  if ( error || error2) return <h1>Error</h1>
  scoreData.sort((a, b) => b.id - a.id);

  return (
    isAuthenticated && (
    <>
      <div>
        <HistoryField scores={scoreData} golfData={golfData}/>
      </div>
    </>
    )
  );
}
