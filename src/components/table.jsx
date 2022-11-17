import React from "react";
import ScoreRow from "./ScoreRow";
import "./table.css"
export default function Table(props) {
  const startRange = props.startRange * 1;
  const endRange = +props.endRange;
  const course = props.course;
  const distances = props.colours?.split(",");
  const handleScore = props.handleScore;
  const score = props.score;
  const score2 = props.score2;
  return (
    <div>
      <table className="box" id="center" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th bgcolor="#37C551">Hole</th>
            {course?.holes.slice(startRange, endRange).map((hole, _) => (
              <th bgcolor="#37C551">{hole.number}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {distances?.map((tee, i) => (
            <tr>
              <td style={{ backgroundColor: tee.toLowerCase() }}></td>
              {course?.holes.slice(startRange, endRange).map((hole, _) => (
                <td>{hole.distances.split(",")[i]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>SI</td>
            {course?.holes.slice(startRange, endRange).map((hole, _) => (
              <td>{hole.hcp}</td>
            ))}
          </tr>
          <tr>
            <td>par</td>
            {course?.holes.slice(startRange, endRange).map((hole, _) => (
              <td>{hole.par}</td>
            ))}
          </tr>
          <tr>
            <td bgcolor="lightgray">score</td>
            {course?.holes.slice(startRange, endRange).map((_, __) => (
              <td bgcolor="lightgray" border-color="lightgray"></td>
            ))}
          </tr>
          <tr>
            <td>
              <input
                className="form-control"
                id="inputs"
                disabled
              />
            </td>
            <ScoreRow course={course} startRange={startRange} endRange={endRange} handleScore={handleScore} score={score} score2={score2}/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
