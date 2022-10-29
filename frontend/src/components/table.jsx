import React from "react";

export default function Table(props) {
  const startRange = props.startRange;
  const endRange = props.endRange;
  const course = props.course;
  const distances = props.colours.split(',');
  let pl = props.players;

  return (
    <div>
      <table className="box" id="center" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th bgcolor="#37C551">Hole</th>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <th bgcolor="#37C551" key={hole.number.toString()}>
                {hole.number}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {distances.map((tee, i) => (
            <tr>
              <td style={{ backgroundColor: tee.toLowerCase() }} key={i}></td>
              {course.holes.slice(startRange, endRange).map((hole, _) => (
                <td key={hole.number.toString()}>{hole.distances.split(',')[i]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>SI</td>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <td key={hole.number.toString()}>{hole.hcp}</td>
            ))}
          </tr>
          <tr>
            <td>par</td>
            {course.holes.slice(startRange, endRange).map((hole, _) => (
              <td key={hole.number.toString()}>{hole.par}</td>
            ))}
          </tr>
          <tr>
            <td bgcolor="lightgray">score</td>
            {course.holes.slice(startRange, endRange).map((_, __) => (
              <td
                bgcolor="lightgray"
                border-color="lightgray"
                key={_.number.toString()}
              ></td>
            ))}
          </tr>
          {/* <tr>
            <td width="130px" height="10px">
              {" "}
              <input className="form-control" id="inputs" type="text"></input>
            </td>
            {course.holes.slice(startRange, endRange).map((_, __) => (
              <td key={_.number.toString()}>
                <input
                  className="form-control"
                  id="inputs"
                  type="number"
                ></input>
              </td>
            ))}
          </tr> */}

          {pl.map((_, __) => (
            
            <tr>
              <td>
                {" "}
                <input className="form-control" id="inputs" type="text"></input>
              </td>
              {course.holes.slice(startRange, endRange).map((_, __) => (
                <td key={_.number.toString()}>
                  {" "}
                  <input
                    className="form-control"
                    id="inputs"
                    type="number"
                  ></input>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
