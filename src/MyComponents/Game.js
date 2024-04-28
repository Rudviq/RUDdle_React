import React from 'react'
import Tries from './Tries'

const Game = () => {
 
  const renderTags = () => {
    const tags = [];
    for (let i = 0; i < 6; i++) {
      tags.push(<MyTag key={i} />);
    }
    return tags;
  };

  return (
    <div className="container" style={{overflow: 'unset'}}>
      <div className="game" >
        {renderTags()}
      </div>
    </div>);
}

function MyTag() {
  return (
    <Tries></Tries>
  )
}

export default Game
