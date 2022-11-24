import "../styles/navBar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="outerNavi">
      <div className="navi">
        <ul id="text">
          <li >
            <Link to="/scoreCard">Scorecard</Link>
          </li>
          <li >
            <Link to="/profile"> profile</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
          <li>
            <Link to="/Stats">statistics</Link>
          </li>
          <li>
            <Link to="/Settings">settings</Link>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
