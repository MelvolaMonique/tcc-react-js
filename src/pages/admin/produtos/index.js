import React from 'react';
import {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Time from './Time.js';
import Agenda from '../produtos/agenda.css'
import InfoBar from './infoBar.js';

function Produtos() {
  const [date, setDate] = useState(new Date())
  const[ showTime, setShowTime] = useState(false)
  const[info, setInfo] = useState('');
  const handleDayClick = () => {
    setShowTime(true);
    setInfo('Informações adicionais para o dia selecionado.'); // Atualize com as informações desejadas
  };

    return (

<div className="produtos">
  <div className="header-container">
   <h1 className="header">Calendário</h1>
   </div>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} onClickDay={handleDayClick} className="custom-calendar"/>
      {showTime && <InfoBar info={info}/>}
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
