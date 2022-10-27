import React from "react";
import { useState } from "react";
import Table from "../components/table";
import { useNavigate } from "react-router-dom";

export default function HeaderButtons(props) {
  const [isShown, setIsShown] = useState(true); //btn1
  const [isShown2, setIsShown2] = useState(true); //btn2
  const [selects, setSelects] = useState(0); //bepaald welke course
  const [golfData] = useState(props.data);
  const [players, setPlayers] = useState([{ value: 1, x: "player" }]);
  const sym = golfData[selects].image;
  const navigate = useNavigate();

  function handleClick1() {
    setIsShown(true);
    setIsShown2(false);
  };

  function handleClick2() {
    setIsShown(false);
    setIsShown2(true);
  };

  function handleClick3() {
    setIsShown(true);
    setIsShown2(true);
  };

  function handleClick4() {
    if (players.length < 4) {
      setPlayers([...players, { value: 1, x: "player" }]);
    }
  };

  function deletePlayer() {
    if (players.length > 1) {
      
      players.pop();
      setPlayers([...players]);
    }
  }

  return (
    <>
      <div>
        <div className="box" style={{ backgroundColor: "white" }}>
          <h3>Scorecard</h3>
          <label for="course">select course:</label>
          <select
            // className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelects(e.target.value)}
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
            className="btn btn-info btn-sm"
            id="button"
            onClick={handleClick4}
          >
            Add Players
          </button>
          <button
            className="btn btn-info btn-sm"
            id="button"
            onClick={deletePlayer}
          >
            delete
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
          
          <div className="logos" id="logo-golf">
            <span className="inner">
              <img src={`${sym}`} alt="x" />
            </span>
          </div>
          </div>
        </div>
        <div>
          {isShown && (
            <Table
              startRange="0"
              endRange="9"
              course={golfData[+selects].courses[0]}
              colours={golfData[+selects].colours}
              players={players}
            />
          )}
          {isShown2 && (
            <Table
              startRange="9"
              endRange="18"
              course={golfData[+selects].courses[0]}
              colours={golfData[+selects].colours}
              players={players}
            />
          )}
        </div>
      </div>
    </>
  );
}
