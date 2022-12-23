import React from "react";
import { v4 as uuid } from "uuid";
export default function ScoreRow(props) {
  const readOnly = props.readOnly;
  const startRange = props.startRange;
  const handleScore = props.handleScore;

  let scores = (props.scores) ? props.scores.split(',') : [];

  return (
    <>
          { [...Array(9)].map((_, i) => (
          <td key={uuid()}>
            <input
              className="form-control"
              id="inputs"
              value={scores[startRange + i]}
              onChange={(e) => handleScore(startRange + i + 1, e.target.value)}
              disabled={readOnly}
            />
          </td>
          ))}
    </>
  );
}
