import React from 'react';
import '../App.css';

const Loser = () => {
  return (
    <div className = "announce" >
      <img src="./lose.png" style={{height:`500px`}}/>
      <h4>Better Luck next time !</h4>

      <h5 id="actualWordsDisplay"></h5>
  </div>
    
  )
}

export default Loser
