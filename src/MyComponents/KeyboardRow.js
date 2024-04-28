import React from 'react'

const KeyboardRow = () => {
  return (
    <>
    <div className='keyboard-row'>
        <button type="button" className="keys" data-key="Q">Q</button>
        <button type="button" className="keys" data-key="W">W</button>
        <button type="button" className="keys" data-key="E">E</button>
        <button type="button" className="keys" data-key="R">R</button>
        <button type="button" className="keys" data-key="T">T</button>
        <button type="button" className="keys" data-key="Y">Y</button>
        <button type="button" className="keys" data-key="U">U</button>
        <button type="button" className="keys" data-key="I">I</button>
        <button type="button" className="keys" data-key="O">O</button>
        <button type="button" className="keys" data-key="P">P</button>
    </div>
    <div className="keyboard-row">
        <div data-testid="spacer" className="space"></div>
        <button type="button" className="keys" data-key="A">A</button>
        <button type="button" className="keys" data-key="S">S</button>
        <button type="button" className="keys" data-key="D">D</button>
        <button type="button" className="keys" data-key="F">F</button>
        <button type="button" className="keys" data-key="G">G</button>
        <button type="button" className="keys" data-key="H">H</button>
        <button type="button" className="keys" data-key="J">J</button>
        <button type="button" className="keys" data-key="K">K</button>
        <button type="button" className="keys" data-key="L">L</button>
        <div data-testid="spacer" className="space"></div>
    </div>
    <div className="keyboard-row">
        <button type="button" className="keys" style={{fontSize: '12px'}}>ENTER</button>
        <button type="button" className="keys" data-key="Z">Z</button>
        <button type="button" className="keys"data-key="X">X</button>
        <button type="button" className="keys" data-key="C">C</button>
        <button type="button" className="keys" data-key="V">V</button>
        <button type="button" className="keys" data-key="B">B</button>
        <button type="button" className="keys" data-key="N">N</button>
        <button type="button" className="keys" data-key="M">M</button>
        <button type="button" className="keys" style={{fontSize: '12px'}}>DEL</button>
        
    </div>
    </>
  )
}

export default KeyboardRow
