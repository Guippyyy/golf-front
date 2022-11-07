import React from "react";
import { useState } from "react";
import Table from "../components/table";
import Header from "../components/Header";
import axios from "axios";

export default function ScoreCard(props) {
  const [isShown, setIsShown] = useState(true); //btn1
  const [isShown2, setIsShown2] = useState(true); //btn2
  const [selects, setSelects] = useState(0);
  const [golfData] = useState(props.data);
  const [score, setScore] = useState({
    scores: Array(18).fill(undefined),
  });

  function handleScore(holeNumber, updatedScore) {
    score.scores[holeNumber - 1] = updatedScore;
    setScore(score);
  }

  function handleClick1() {
    setIsShown(true);
    setIsShown2(false);
  }

  function handleClick2() {
    setIsShown(false);
    setIsShown2(true);
  }

  function handleClick3() {
    setIsShown(true);
    setIsShown2(true);
  }

  function handleSelect(e) {
    setSelects(e.target.value);
  }

  const [ setData] = useState();

  async function submit() {
    let geefPar = [];
    golfData[+selects].courses[0].holes.map((hole) => geefPar.push(hole.par));

    let pakScore = [];
    score.scores.map((score) => pakScore.push(score*1));

    let arr3 = [];
    for (let e in pakScore) {
      if (!isNaN(pakScore[e])) {
        arr3.push(pakScore[e]);
      }
    }
    
    let som = 0;
    for (let e = 0; e < arr3.length; e++) {
      som += arr3[e] - geefPar[e];
    }

    try {
      const {data} = await axios.post(
        "http://localhost:3001/scores",
        {
          coursID: selects*1 + 1 ,
          scores: arr3.toString(),
          result: som,
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }

    prompt(`you played: ${som}`);
  }

  return (
    <>
      <div className="kont">
        <Header
          golfData={golfData}
          handleClick1={handleClick1}
          handleClick2={handleClick2}
          handleClick3={handleClick3}
          handleSelect={handleSelect}
          selects={selects}
        />
        {isShown && (
          <Table
             index="1"
            startRange="0"
            endRange="9"
            course={golfData[+selects].courses[0]}
            colours={golfData[+selects].colours}
            score={score}
            handleScore={handleScore}
          />
        )}
        {isShown2 && (
          <Table
            index="2"
            startRange="9"
            endRange="18"
            course={golfData[+selects].courses[0]}
            colours={golfData[+selects].colours}
            score={score}
            handleScore={handleScore}
          />
        )}
      </div>
      <button className="btn btn-info btn-sm" id="button" onClick={submit}>
        submit
      </button>
    </>
  );
}
