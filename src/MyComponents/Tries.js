import React from 'react'
import Keys from './Keys'

const Tries = ({index,letters}) => {
  
  const renderTags = () => {
    const tags = [];
    for (let i = 0; i < 5; i++) {
      if(letters[i]){
        tags.push(<Keys key={i} tries={index} nletter = {i} letters={letters}/>);
      }
      else{
        tags.push(<Keys key={i} tries={index} letters={letters}/>);
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
