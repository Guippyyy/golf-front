import React from "react";
import { useState } from "react";
import Table from "../components/table";
import data from "../api/mock-data.json";
import { useNavigate } from "react-router-dom";

export default function HeaderButtons({ props }) {
  const [isShown, setIsShown] = useState(true); //btn1
  const [isShown2, setIsShown2] = useState(true); //btn2

  const [selects, setSelects] = useState(); //bepaald welke course
  const [golf] = useState(data);
  const handleClick1 = (event) => {
    setIsShown(true);
    setIsShown2(false);
  };

  const handleClick2 = (event) => {
    setIsShown(false);
    setIsShown2(true);
  };

  const handleClick3 = (event) => {
    setIsShown(true);
    setIsShown2(true);
  };

  const [players, setPlayers] = useState([]);

  const handleClick4 = (event) => {
    if (players.length === 3) {
      setPlayers(...players);
    } else {
      setPlayers([...players, { value: 1, x: "player" }]);
    }
  };

  let icon = selects;
  let sym;
  if (isNaN(icon)) {
    icon = 0;
  }
  sym = golf[icon].image;

  let navigate = useNavigate();

  return (
    <>
      <div>
        <div className="box" style={{ backgroundColor: "white" }}>
          <h1>Guillaume De Craene</h1>
          <label for="course">select course:</label>
          <select
            // className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelects(e.target.value)}
          >
            <option value="0">Waregem</option>
            <option value="1">Oudenaarde</option>
            <option value="2">Damme</option>
          </select>

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
        <div>
          {isShown && (
            <Table
              startRange="0"
              endRange="9"
              selects={selects * 1}
              players={players}
            />
          )}
          {isShown2 && (
            <Table
              startRange="9"
              endRange="18"
              selects={selects * 1}
              players={players}
            />
          )}
        </div>
      </div>
    </>
  );
}
