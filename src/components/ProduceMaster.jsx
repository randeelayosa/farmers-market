import React from 'react';
import Produce from './Produce';

function ProduceMaster(props){
  return(
    <div>
      <h2>{props.month}</h2>
      <p>{props.selection.map((food, index) =>
          <li key={index}>{food}</li>
      )}</p>
    </div>
  );
}

export default ProduceMaster;
