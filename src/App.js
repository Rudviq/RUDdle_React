import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './MyComponents/Header';
import WinnerWindow from './MyComponents/WinnerWindow';
import LoserWindow from './MyComponents/LoserWindow';
import Main from './MyComponents/Main';

function App() {
  
  const [isPlaying,setIsPlaying] = useState(true);
  const [winStatus,setWinStatus] = useState(null);
  return (
    <div className="App" >
      <Header></Header>
      {/* <WinnerWindow></WinnerWindow>
      <LoserWindow></LoserWindow> */}
      {!isPlaying && winStatus && <WinnerWindow />}
      
      {isPlaying && <Main setIsPlaying= {setIsPlaying} setWinStatus={setWinStatus}></Main>}
      {!isPlaying && !winStatus && <LoserWindow/>}
    </div>
  );
}

export default App;
