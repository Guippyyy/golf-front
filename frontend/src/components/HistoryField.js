
import React, {useState} from "react";
import "../App.css";
import "../pages/history.css";
export default function HistoryField(props) {
  const scores = props.scores;
  const [golfData] = useState(props.golfData);
  
  scores.sort((a,b)=> b.id - a.id)

  return (
    <>

      
      <div className="kont" id="scroll">
        {scores.map((score) => (
          
          <div className="vakken" style={{ backgroundColor: "white" }}>
          
            <span className="logos2 grid-vak-logo" id="span1">
            
              <img id="logo-golf2" src={`${golfData[score.coursID-1].image}`} alt="y"/>

            </span>
            <span className="grid-vak-naam" id="text">{golfData[score.coursID-1].name}</span>
            <span className="grid-vak-date" id="text">{score.createdAt}</span>
            
            <span className="grid-vak-result" id= "text">{score.result}</span>
            <a className="grid-vak-button" href=":">show more</a>
          </div>
        ))}
      </div>
    </>
  );
}
