import "../components/navBar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="outerNavi">
      <div className="navi">
        <ul id="text">
          <li >
            <Link to="/scoreCard">Scorecard</Link>
          </li>
          <li >
            <Link to="/" className="liPR"> profile</Link>
          </li>
          <li className="liHI">
            <Link to="/history">history</Link>
          </li>
          <li className="liSTA">
            <Link to="/Stats">statistics</Link>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Navbar;
