import React from 'react'
import { useState } from 'react';
import Table from './table';
export default function Collapsible(props) {
    const golfData = props.golfData
    const scoreData = props.scoreData

    scoreData.sort((a,b) => b.id - a.id);

    function create(scoreDatas){
      let data = []
      for (let i=0; i < scoreDatas.length; i++){
        data.push(scoreDatas[i].scores)
      }
    
      return data;
    }


    const HistoryScore = create(scoreData);

    const tel = props.tel;
    const [open, setOPen] = useState(false);
    const toggle = () => {
      setOPen(!open);
    };

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


