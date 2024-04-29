import React from 'react'

const KeyboardRow = ({handleKeyPress,handleEnterPress,handleDelPress}) => {
  
  return (
      <>
    <div className='keyboard-row'>
        <button type="button" className="keys" data-key="Q" onClick={(e)=>handleKeyPress(e.target.dataset)}>Q</button>
        <button type="button" className="keys" data-key="W" onClick={(e)=>handleKeyPress(e.target.dataset)}>W</button>
        <button type="button" className="keys" data-key="E" onClick={(e)=>handleKeyPress(e.target.dataset)}>E</button>
        <button type="button" className="keys" data-key="R" onClick={(e)=>handleKeyPress(e.target.dataset)}>R</button>
        <button type="button" className="keys" data-key="T" onClick={(e)=>handleKeyPress(e.target.dataset)}>T</button>
        <button type="button" className="keys" data-key="Y" onClick={(e)=>handleKeyPress(e.target.dataset)}>Y</button>
        <button type="button" className="keys" data-key="U" onClick={(e)=>handleKeyPress(e.target.dataset)}>U</button>
        <button type="button" className="keys" data-key="I" onClick={(e)=>handleKeyPress(e.target.dataset)}>I</button>
        <button type="button" className="keys" data-key="O" onClick={(e)=>handleKeyPress(e.target.dataset)}>O</button>
        <button type="button" className="keys" data-key="P" onClick={(e)=>handleKeyPress(e.target.dataset)}>P</button>
    </div>
    <div className="keyboard-row">
        <div data-testid="spacer" className="space"></div>
        <button type="button" className="keys" data-key="A" onClick={(e)=>handleKeyPress(e.target.dataset)}>A</button>
        <button type="button" className="keys" data-key="S" onClick={(e)=>handleKeyPress(e.target.dataset)}>S</button>
        <button type="button" className="keys" data-key="D" onClick={(e)=>handleKeyPress(e.target.dataset)}>D</button>
        <button type="button" className="keys" data-key="F" onClick={(e)=>handleKeyPress(e.target.dataset)}>F</button>
        <button type="button" className="keys" data-key="G" onClick={(e)=>handleKeyPress(e.target.dataset)}>G</button>
        <button type="button" className="keys" data-key="H" onClick={(e)=>handleKeyPress(e.target.dataset)}>H</button>
        <button type="button" className="keys" data-key="J" onClick={(e)=>handleKeyPress(e.target.dataset)}>J</button>
        <button type="button" className="keys" data-key="K" onClick={(e)=>handleKeyPress(e.target.dataset)}>K</button>
        <button type="button" className="keys" data-key="L" onClick={(e)=>handleKeyPress(e.target.dataset)}>L</button>
        <div data-testid="spacer" className="space"></div>
    </div>
    <div className="keyboard-row">
        <button type="button" className="keys" onClick={handleEnterPress} style={{fontSize: '12px'}}>ENTER</button>
        <button type="button" className="keys" data-key="Z" onClick={(e)=>handleKeyPress(e.target.dataset)}>Z</button>
        <button type="button" className="keys"data-key="X" onClick={(e)=>handleKeyPress(e.target.dataset)}>X</button>
        <button type="button" className="keys" data-key="C" onClick={(e)=>handleKeyPress(e.target.dataset)}>C</button>
        <button type="button" className="keys" data-key="V" onClick={(e)=>handleKeyPress(e.target.dataset)}>V</button>
        <button type="button" className="keys" data-key="B" onClick={(e)=>handleKeyPress(e.target.dataset)}>B</button>
        <button type="button" className="keys" data-key="N" onClick={(e)=>handleKeyPress(e.target.dataset)}>N</button>
        <button type="button" className="keys" data-key="M" onClick={(e)=>handleKeyPress(e.target.dataset)}>M</button>
        <button type="button" className="keys" onClick={handleDelPress} style={{fontSize: '12px'}}>DEL</button>
        
    </div>
    </>
  )
}

export default KeyboardRow
