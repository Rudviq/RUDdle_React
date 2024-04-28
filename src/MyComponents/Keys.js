import React from 'react'
import LetterKeys from './LetterKeys'

const Keys = ({tries,nletter,letters}) => {


  return (
    <div className="letter">
      <LetterKeys letters={letters} nletter={nletter}></LetterKeys>
    </div>
    
  )
}

export default Keys
