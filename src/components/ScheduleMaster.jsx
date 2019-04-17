import React from 'react';
import Schedule from './Schedule';

function ScheduleMaster(props){
  const weekStyle ={
    textAlign: 'center',
    border: '2px solid black',
    padding: '1%',
    width: '14%'
  }
  return(
    <div style={weekStyle}>
      <h2>{props.day}</h2>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

export default ScheduleMaster;
