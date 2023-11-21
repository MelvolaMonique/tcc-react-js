import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './index.js';


const time = ['08:00','08:30','09:00','09:30','10:00','10:30','13:00','13:30','14:00','14:30', '15:00','15:30']
function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
  <div className="times">
    <div className="buttons-container">
      {time.map((times, index) => (
        <button key={index} onClick={(e) => displayInfo(e)}>{times}</button>
      ))}
    </div>
    <div className="info-container">
      {info ? `Seu compromisso está marcado para ${event} ${props.date.toDateString()}` : null}
    </div>
  </div>
);
}

export default Times;
