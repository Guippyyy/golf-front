import React from "react";
import { useState } from "react";
import Table from "./table";
import Header from "./Header";
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
    // console.log(score.scores);
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

  const [data, setData] = useState();

  async function submit(e) {
    let arr = [];
    let x = golfData[+selects].courses[0];
    x.holes.map((hole) => arr.push(hole.par));
    let arr2 = [];
    score.scores.map((score) => arr2.push(score));
    arr2 = arr2.map((score) => score * 1);
    let arr3 = [];
    for (let e in arr2) {
      if (!isNaN(arr2[e])) {
        arr3.push(arr2[e]);
      }
    }
    let som = 0;
    for (let e = 0; e < arr3.length; e++) {
      som += arr3[e] - arr[e];
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

    alert(`you played: ${som}`);
  }

  return (
    <>
      <div>
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
