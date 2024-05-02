import React from 'react'
import LetterKeys from './LetterKeys'

const Keys = ({nletter,letters,c}) => {


  return (
    <div className="letter">
      <LetterKeys letters={letters} nletter={nletter} c={c}/>
    </div>
    
  )
}

export default Keys
