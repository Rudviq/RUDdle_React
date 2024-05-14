import React from 'react';
import '../App.css';

const Loser = (props) => {
  return (
    <div className = "announce" >
      <img src="./lose.png" style={{height:`400px`}} alt='Looser'/>
      <h4 id="actualWordsDisplay">{props.actualWord}</h4>
      <h4 id="actualWordsDisplay">{props.meaning}</h4>
      <h4>Better Luck next time !</h4>

      
  </div>
    
  )
}

export default Loser
