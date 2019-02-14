import React from 'react';
import './Results.css';

function Results(props){
  const result = props.data.results.map((i,j) =><li key= {j}>{i.name}</li>);
  return(
    <ul>
      {result}
    </ul>
  );
}

export default Results;