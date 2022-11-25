import React, { useState } from "react";
import "../styles/Stats.css";
import LineChart from "../components/LineChart";
import { useAuth0 } from "@auth0/auth0-react";
import { UserData } from "../api/MockData/data.js";

export default function Stats() {
  const { isAuthenticated } = useAuth0();
  const [userData] = useState({
    labels: UserData.map((e) => e.year),
    datasets: [
      { label: "users gained", data: UserData.map((e) => e.userGain) },
    ],
  });

  return (
    isAuthenticated && (
    <>
      <div className="boxStats">
      <div className="width">
        <LineChart chartData={userData} />
        </div>
      </div>
    </>
    )
  );
}
