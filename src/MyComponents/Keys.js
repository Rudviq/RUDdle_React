import React from 'react'
import LetterKeys from './LetterKeys'

const Keys = ({tries,nletter,letters}) => {

  console.log(nletter);

  return (
    <div className="letter">
      <LetterKeys letters={letters} nletter={nletter}></LetterKeys>
    </div>
    
  )
}

export default Keys
