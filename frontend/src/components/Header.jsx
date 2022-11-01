import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const golfData = props.golfData
    const handleClick1 = props.handleClick1
    const handleClick2 = props.handleClick2
    const handleClick3 = props.handleClick3
    const handleSelect = props.handleSelect 
    const selects = props.selects
    const sym = golfData[selects].image;
    const navigate = useNavigate();
  

  return (
    <div>
        <div className="box" style={{ backgroundColor: "white" }}>
          <h3>Scorecard</h3>
          <label htmlFor="course">select course:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleSelect}
          >
          {
            golfData.map((golf, i) => 
              <option value={i}>{ golf.name }</option>
            )
          }
          </select>
          <div>
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={handleClick1}
          >
            1-9 holes
          </button>
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={handleClick2}
          >
            10-18 holes
          </button>
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={handleClick3}
          >
            18 holes
          </button>
          <button
            className="btn btn-warning btn-sm"
            id="button"
            onClick={() => {
               navigate("/profile");
            }}
          >
            Profile
          </button>
          
          <div className="logos">
            <img className="logo-golf" src={`${sym}`} alt="x" />
          </div>
          </div>
        </div>
    </div>
  )
}
