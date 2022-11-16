import React from 'react'
import { useState } from 'react';

export default function ScoreRow(props) {
    const course = props.course
    const startRange = props.startRange
    const endRange = props.endRange
    const handleScore = props.handleScore
    const score = props.score
    const score2 = props.score2
    let scoreX;

    function scoreRowMaker(score, score2) {
        if (score2 === undefined)
            scoreX = score
        else if (score === undefined)
            scoreX = score2
    }

  return (
    <>
    {scoreRowMaker(score, score2)}
    {console.log(scoreX)}
    {course.holes.slice(startRange, endRange).map((hole) => (
        <td key={hole.number}>
          <input
            className="form-control"
            id="inputs"
            value={scoreX.scores[hole.number - 1]}
            onChange={(e) => handleScore(hole.number, e.target.value)}
          />
        </td>
      ))}
    </>
  )
}
