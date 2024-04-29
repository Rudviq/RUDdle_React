import React from 'react'
import Keys from './Keys'

const Tries = ({index,letters,color}) => {
  
  const renderTags = () => {
    const tags = [];
    for (let i = 0; i < 5; i++) {
      if(letters[i]){
        tags.push(<Keys key={i} tries={index} nletter = {i} letters={letters} c={color[i]}/>);
      }
      else{
        tags.push(<Keys key={i} tries={index} letters={letters} c={color[i]} />);
      }
    }
    return tags;
  };
  
  return (
    <div className="game-container">
      {renderTags()}
    </div>
  )
}

// function MyTag() {
//   return (
//     <Keys></Keys>
//   )
// }

export default Tries
