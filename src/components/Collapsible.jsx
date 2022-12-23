import React from 'react'
import { useState } from 'react';
//import { v4 as uuid } from 'uuid';
import Table from './table';
export default function Collapsible(props) {
    const golfData = props.golfData
    const scoreData = props.scoreData

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
        <Table 
            // key={uuid()}
            index="1"
            startRange="0"
            endRange="9"
            disabled={true}
            course={golfData[+tel-1].course[0]}
            colours={golfData[+tel-1].colours}
            scores = {scoreData.scores}
            />
        <Table index="2"
            // key={uuid()}
            startRange="9"
            endRange="18"
            disabled={true}
            course={golfData[+tel-1].course[0]}
            colours={golfData[+tel-1].colours}
            scores = {scoreData.scores}
            />
      </div>
    )}
    </>
  )
}


