import React from "react";

export default function ScoreRow(props) {
  const course = props.course;
  const startRange = props.startRange;
  const endRange = props.endRange;
  const handleScore = props.handleScore;
  const score = props.score;
  const HistoryScore = props.score2;

  function showOrNoShow(score, HistoryScore, handleScore, hole) {
    if (HistoryScore === undefined) {
      return (
        <input
          className="form-control"
          id="inputs"
          onChange={(e) => handleScore(hole.number, e.target.value)}
        />
      );
    } else if (score === undefined) {
      for (let i = 0; i < HistoryScore.length; i++) 
        {
          return (
            <input
              className="form-control"
              id="inputs"
              value={HistoryScore[i]}
              disabled
            />
          );
        
      }
    }
  }

  function makeHistoryScoreGreatAgain(HistoryScore) {
    const HolyHistoryScore = [];
    for (let i = 0; i < HistoryScore.length; i++) {
      HolyHistoryScore.push(HistoryScore[i].split(","));
    }

    return HolyHistoryScore;
  }

  console.log(score);
  console.log(HistoryScore);

  if (HistoryScore !== undefined)
    console.log(makeHistoryScoreGreatAgain(HistoryScore));
  let sliced = course?.hole.slice(startRange, endRange);

  return (
    <>
      {sliced.map((hole) => (
        <td key={hole.number}>
          {showOrNoShow(score, HistoryScore, handleScore, hole)}
        </td>
      ))}
    </>
  );
}
