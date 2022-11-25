import {React, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";


export default function Header(props) {
  const golfData = props.golfData;
  const show1_9 = props.show1_9;
  const show10_18 = props.show10_18;
  const show18 = props.show18;
  const handleSelect = props.handleSelect;
  const selects = props.selects;
  const sym = golfData[selects]?.image;
  const navigate = useNavigate();
  const handleGoHome = useCallback(() => {
    navigate('/profile', { replace: true });
  }, [navigate]);

  return (
    <div className="bg">
      <div className="box3 bg" style={{backgroundColor: "white"}}>
        <h3 id="text">Scorecard</h3>
        <label htmlFor="course"></label>
        <select
          id="text"
          className="grid-header-select"
          aria-label="Default select example"
          onChange={handleSelect}
        >
          {golfData.map((golf, i) => (
            <option value={i}>{golf.name}</option>
          ))}
        </select>
        <div className="grid-header-button1">
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={show1_9}
          >
            1-9 holes
          </button>
          <button
            className=" btn btn-info btn-sm"
            id="button"
            onClick={show10_18}
          >
            10-18 holes
          </button>
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={show18}
          >
            18 holes
          </button>
          <button
            className="btn btn-warning btn-sm"
            id="button"
            onClick={() => handleGoHome()}
          >
            Profile
          </button>
        </div>

        <div className="grid-header-logo logos">
            <img id="logo-golf" src={`${sym}`} alt="x" />
        </div>
      </div>
    </div>
  );
}
