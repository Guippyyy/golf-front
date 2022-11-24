import React from 'react'
import { useState } from 'react';
import { useScores } from "../api/DataFetching/FetchScores";
import useGolfCourses from '../api/DataFetching/useGolfCourses';
import Table from './table';
export default function Collapsible(props) {
    const { golfData, loading, error} = useGolfCourses()
    const { scoreData, loading2, error2} = useScores();

    scoreData.sort((a,b) => b.id - a.id);


    const HistoryScore = create(scoreData);

    const tel = props.tel;
    const [open, setOPen] = useState(false);
    const toggle = () => {
      setOPen(!open);
    };

    if (loading || loading2) return <h1>loading...</h1>
    if (error || error2)  return <h1>error...</h1>
  return (
    <>
    <button className='showMore' onClick={toggle}>show more</button>
    {open && ( 
      <div>
        <Table index="1"
            startRange="0"
            endRange="9"
            course={golfData[+tel-1].course[0]}
            colours={golfData[+tel-1].colours}
            score2 = {HistoryScore}
            />
        <Table index="2"
            startRange="9"
            endRange="18"
            course={golfData[+tel-1].course[0]}
            colours={golfData[+tel-1].colours}
            score2 = {HistoryScore}
            />
      </div>
    )}
    </>
  )
}


function create(scoreDatas){
  let data = []
  for (let i=0; i < scoreDatas.length; i++){
    data.push(scoreDatas[i].scores)
  }

  return data;
}