import React from "react";

export default function ScoreRow(props) {
  const readOnly = props.readOnly;
  const startRange = props.startRange;
  const handleScore = props.handleScore;

  let scores = (props.scores) ? props.scores.split(',') : [];

  return (
    <>
          { [...Array(9)].map((_, i) => (
          <td>
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
