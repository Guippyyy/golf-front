import React from "react";
import "./table.css"
export default function Table(props) {
  const startRange = props.startRange * 1;
  const endRange = +props.endRange;
  const course = props.course;
  const distances = props.colours.split(",");
  const score = props.score;
  const handleScore = props.handleScore;

  return (
    <div>
      <table className="box" id="center" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th bgcolor="#37C551">Hole</th>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <th bgcolor="#37C551">{hole.number}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {distances.map((tee, i) => (
            <tr>
              <td style={{ backgroundColor: tee.toLowerCase() }}></td>
              {course.holes.slice(startRange, endRange).map((hole, _) => (
                <td>{hole.distances.split(",")[i]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>SI</td>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <td>{hole.hcp}</td>
            ))}
          </tr>
          <tr>
            <td>par</td>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <td>{hole.par}</td>
            ))}
          </tr>
          <tr>
            <td bgcolor="lightgray">score</td>
            {course.holes.slice(startRange, endRange).map((_, __) => (
              <td bgcolor="lightgray" border-color="lightgray"></td>
            ))}
          </tr>
          <tr>
            <td>
              <input
                className="form-control"
                id="inputs"

              />
            </td>
            {course.holes.slice(startRange, endRange).map((hole) => (
              <td key={hole.number}>
                <input
                  className="form-control"
                  id="inputs"
                  value={score.scores[hole.number - 1]}
                  onChange={(e) => handleScore(hole.number, e.target.value)}
                />
              </td>
            ))}
          </tr>
          {/* <tr>
            <td bgcolor="lightgray">marker</td>
            {course.holes.slice(startRange, endRange).map((_, __) => (
              <td bgcolor="lightgray" border-color="lightgray"></td>
            ))}
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
