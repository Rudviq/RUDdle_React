import React from 'react'

const KeyboardRow = ({handleKeyPress}) => {
  
  return (
      <>
    <div className='keyboard-row'>
        <button type="button" className="keys" data-key="Q" onClick={handleKeyPress}>Q</button>
        <button type="button" className="keys" data-key="W" onClick={handleKeyPress}>W</button>
        <button type="button" className="keys" data-key="E" onClick={handleKeyPress}>E</button>
        <button type="button" className="keys" data-key="R" onClick={handleKeyPress}>R</button>
        <button type="button" className="keys" data-key="T" onClick={handleKeyPress}>T</button>
        <button type="button" className="keys" data-key="Y" onClick={handleKeyPress}>Y</button>
        <button type="button" className="keys" data-key="U" onClick={handleKeyPress}>U</button>
        <button type="button" className="keys" data-key="I" onClick={handleKeyPress}>I</button>
        <button type="button" className="keys" data-key="O" onClick={handleKeyPress}>O</button>
        <button type="button" className="keys" data-key="P" onClick={handleKeyPress}>P</button>
    </div>
    <div className="keyboard-row">
        <div data-testid="spacer" className="space"></div>
        <button type="button" className="keys" data-key="A" onClick={handleKeyPress}>A</button>
        <button type="button" className="keys" data-key="S" onClick={handleKeyPress}>S</button>
        <button type="button" className="keys" data-key="D" onClick={handleKeyPress}>D</button>
        <button type="button" className="keys" data-key="F" onClick={handleKeyPress}>F</button>
        <button type="button" className="keys" data-key="G" onClick={handleKeyPress}>G</button>
        <button type="button" className="keys" data-key="H" onClick={handleKeyPress}>H</button>
        <button type="button" className="keys" data-key="J" onClick={handleKeyPress}>J</button>
        <button type="button" className="keys" data-key="K" onClick={handleKeyPress}>K</button>
        <button type="button" className="keys" data-key="L" onClick={handleKeyPress}>L</button>
        <div data-testid="spacer" className="space"></div>
    </div>
    <div className="keyboard-row">
        <button type="button" className="keys" style={{fontSize: '12px'}}>ENTER</button>
        <button type="button" className="keys" data-key="Z" onClick={handleKeyPress}>Z</button>
        <button type="button" className="keys"data-key="X" onClick={handleKeyPress}>X</button>
        <button type="button" className="keys" data-key="C" onClick={handleKeyPress}>C</button>
        <button type="button" className="keys" data-key="V" onClick={handleKeyPress}>V</button>
        <button type="button" className="keys" data-key="B" onClick={handleKeyPress}>B</button>
        <button type="button" className="keys" data-key="N" onClick={handleKeyPress}>N</button>
        <button type="button" className="keys" data-key="M" onClick={handleKeyPress}>M</button>
        <button type="button" className="keys" style={{fontSize: '12px'}}>DEL</button>
        
    </div>
    </>
  )
}

export default KeyboardRow
