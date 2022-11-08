import "../components/navBar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navi">
        <ol className="ol" id="text">
          <li>
            <Link to="/scoreCard">Scorecard</Link>
          </li>
          <li aria-current="page">
            <Link to="/"> profile</Link>
          </li>
          <li aria-current="page">
            <Link to="/history">history</Link>
          </li>
          <li aria-current="page">
            <Link to="/Stats">statistics</Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Navbar;
