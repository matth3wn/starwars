import React from 'react';
import './Results.css';

function Results(props) {

 let result;
 if(props.data.results && props.data.results.length > 0){
   result = props
    .data
    .results
    .map((i, j) => {
        return(<li key={j}>{i.name}</li>);      
    });
 }
 else if(props.data.results){
  result = <li>No results found...</li>
 }
  
  return (
    <ul>
      {result}
    </ul>
  );
}

export default Results;