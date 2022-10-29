import "./App.css";
import "./components/table.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderButtons from "./components/HeaderButtons";
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import History from "./pages/History"
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
          <Route exact path="/" element={<HeaderButtons data={golfData} />} />
          <Route
            exact
            path="/Profile"
            element={<Profile authorized={true} />}
          />
          <Route exact path="/History" element ={<History />} />
          <Route exact path="/Login" element={<Login />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}
