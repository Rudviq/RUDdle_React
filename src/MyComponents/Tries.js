import React from 'react'
import Keys from './Keys'

const Tries = () => {

  const renderTags = () => {
    const tags = [];
    for (let i = 0; i < 5; i++) {
      tags.push(<MyTag key={i} />);
    }
    return tags;
  };
  
  return (
    <div className="game-container">
      {renderTags()}
    </div>
  )
}

function MyTag() {
  return (
    <Keys></Keys>
  )
}

export default Tries
