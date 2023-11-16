import React from 'react';
import {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from './Time.js';

function Produtos() {
  const [date, setDate] = useState(new Date())
  const[ showTime, setShowTime] = useState(false)


    return (
<div className="produtos">
   <h1 className="header">React Calendar</h1>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>

   <div className="text-center">
      Selecione uma data: {date.toDateString()}
   </div>
   {date.length > 0 ? (
     <p>
       <span>começar</span>
       {date[0].toDateString()}
       &nbsp;
       &nbsp;
       <span>fim</span> {date[1].toDateString()}
     </p>
   ) : (
     <p>
       <span>Selecione uma data final: </span>{' '} {date.toDateString()}
     </p>
   )}
   <Time showTime={showTime} date={date}/>
 </div>

    );
}
export default Produtos;
