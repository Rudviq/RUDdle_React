import React from 'react'

const LetterKeys = ({letters,nletter,c}) => {
  
  
  return (
    <div className="letter-keys" style={{ backgroundColor: c === 'G' ? '#227526' : c === 'Y' ? '#8C8818' : c === 'B' ? '#656565'  : c === 'D' ? '#1c2e4a' : 'transparent'}} >{letters[nletter]}
    </div>
  )
}

export default LetterKeys
