import React from "react";
import ScoreRow from "./ScoreRow";
import "../styles/table.css";
import { v4 as uuid } from "uuid";
export default function Table(props) {
  const readOnly = props.disabled;
  const startRange = props.startRange * 1;
  const endRange = +props.endRange;

  const course = props.course;
  const distances = props.colours?.split(",");
  const handleScore = props.handleScore;

  const scores = props.scores;

  let sliced = course?.hole.slice(startRange, endRange);

  return (
    <div>
      <table
        // key={uuid()}
        className="box"
        id="center"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr key={uuid()} bgcolor="#37C551">
            <th key={uuid()}>Hole</th>
            {sliced.map((hole, _) => (
              <th key={uuid()}>{hole.number}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {distances?.map((tee, i) => (
            <tr key={uuid()}>
              <td
                key={uuid()}
                style={{ backgroundColor: tee.toLowerCase() }}
              ></td>
              {sliced.map((hole, _) => (
                <td key={uuid()}>{hole.distances.split(",")[i]}</td>
              ))}
            </tr>
          ))}
          <tr key={uuid()}>
            <td key={uuid()}>SI</td>
            {sliced.map((hole, _) => (
              <td key={uuid()}>{hole.hcp}</td>
            ))}
          </tr>
          <tr key={uuid()}>
            <td key={uuid()}>par</td>
            {sliced.map((hole, _) => (
              <td key={uuid()}>{hole.par}</td>
            ))}
          </tr>
          <tr key={uuid()}>
            <td bgcolor="lightgray">score</td>
            {sliced.map((_, __) => (
              <td
                key={uuid()}
                bgcolor="lightgray"
                border-color="lightgray"
              ></td>
            ))}
          </tr>
          <tr key={uuid()}>
            <td key={uuid()}>
              <input className="form-control" id="inputs" disabled />
            </td>
            <ScoreRow
              key={props.key}
              readOnly={readOnly}
              startRange={startRange}
              handleScore={handleScore}
              scores={scores}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
