import React, { useEffect } from 'react'
import Game from './Game';
import Keyboard from './Keyboard';
import { useEffect,useState } from 'react';

const Main = () => {
  return (
    <main className ="main">
        
        <Game></Game>
        <Keyboard></Keyboard>
        
    </main>
  )
}

export default Main
