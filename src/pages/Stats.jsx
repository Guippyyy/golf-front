import React from "react";
import "../styles/Stats.css";
import { useAuth0 } from "@auth0/auth0-react";
import LineChart from "../charts/LineChart";
import DoughnutChart from "../charts/DoughnutChart";
import { useScores} from '../api/DataFetching/FetchScores'

export default function Stats() {
  const { isAuthenticated } = useAuth0();
  const {scoreData} = useScores();
  let c = scoreData.map(e => e.result)
  let mn = Math.min(...c)
  return (
    isAuthenticated && (
      <>
        <div className="boxStats">
          <div className="width">
            <LineChart />
          </div>
          <div>
            <DoughnutChart />
          </div>
          <div>
            <div id='text' >total times played: {scoreData.length}</div>
            <div id= 'text'>best score: {mn}</div>
          </div>
        </div>
      </>
    )
  );
}
