import React from 'react'
import { useState } from 'react';
import Table from './table';
export default function Collapsible(props) {
    const [golfData] = useState(props.golfData);
    const scoreData = props.scoreData;
    const tel = props.tel;
    const [open, setOPen] = useState(false);
    const toggle = () => {
      setOPen(!open);
    };
    const [score2] = useState({
      scores: Array(18).fill(1),
    });

    console.log(scoreData)
    console.log(tel)
  return (
    <>
    <button className='showMore' onClick={toggle}>show more</button>
    {open && ( 
      <div>
        <Table index="1"
            startRange="0"
            endRange="9"
            course={golfData[+tel-1].courses[0]}
            colours={golfData[+tel-1].colours}
            score2={score2}
            />
        <Table index="2"
            startRange="9"
            endRange="18"
            course={golfData[+tel-1].courses[0]}
            colours={golfData[+tel-1].colours}
            score2={score2}
            />
      </div>
    )}
    </>
  )
}
