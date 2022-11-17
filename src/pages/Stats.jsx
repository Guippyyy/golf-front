import React, { useState } from "react";
import "../pages/Stats.css";

import Navbar from "../components/navBar";
import LineChart from "../components/LineChart";

import { UserData } from "../api/MockData/data.js";

export default function Stats() {
  const [userData] = useState({
    labels: UserData.map((e) => e.year),
    datasets: [
      { label: "users gained", data: UserData.map((e) => e.userGain) },
    ],
  });

  return (
    <>
      <Navbar />

      <div className="boxStats">
      <div className="width">
        <LineChart chartData={userData} />
        </div>
      </div>
    </>
  );
}
