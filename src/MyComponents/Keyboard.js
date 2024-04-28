import React from 'react';
import KeyboardRow from './KeyboardRow';

const Keyboard = (props) => {
  return (
    <div className='keyboard'>
      <KeyboardRow handleKeyPress = {props.handleKeyPress}></KeyboardRow>
    </div>
  )
}

export default Keyboard
