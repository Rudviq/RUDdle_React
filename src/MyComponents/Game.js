import React from 'react'
import Tries from './Tries'

const Game = ({letters,tries}) => {
 
  const renderTags = () => {
    const tags = [];
    console.log(letters);
    for (let i = 0; i < 6; i++) {
      if(i===tries){
        
        tags.push(<Tries key={i} index={i} letters ={letters}/>);
      }
      else{
        tags.push(<Tries key={i} index={i} letters={''}/>);
      }
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


export default Game
