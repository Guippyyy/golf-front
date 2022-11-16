import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScoreCard from "./pages/ScoreCard";
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import History from "./pages/History"
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import { getGolfCourses } from "./api/DataFetching"
import {  useEffect, useState } from "react";

export default function App() {
  const [golfData, setGolfData] = useState([])

  useEffect(() => {
    getGolfCourses(setGolfData)
  }, [])
  
  if (golfData.length === 0) {
    return <div>loading...</div>
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/scoreCard" element={<ScoreCard data={golfData} />} />
          <Route
            index
            element={<Profile authorized={true} />}
          />
          <Route exact path="/History" element ={<History data={golfData}/>} />
          <Route exact path="/stats" element ={<Stats />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
