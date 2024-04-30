import React from 'react';
import KeyboardRow from './KeyboardRow';

const Keyboard = (props) => {
  return (
    <div className='keyboard'>
      <KeyboardRow handleKeyPress = {props.handleKeyPress} handleEnterPress={props.handleEnterPress} handleDelPress={props.handleDelPress} letters={props.letters} color={props.color}></KeyboardRow>
    </div>
  )
}

export default Keyboard
