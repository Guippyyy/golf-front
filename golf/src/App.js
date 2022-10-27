import "./App.css";
import "./components/table.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import HeaderButtons from "./components/HeaderButtons";
// import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      {/* <HeaderButtons /> */}
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route
            exact
            path="/Profile"
            element={<Profile authorized={true} />}
          />
          <Route exact path="/" element={<HeaderButtons />} />
        </Routes>
      </Router>
    </>
  );
}