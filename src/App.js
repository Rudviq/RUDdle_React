import './App.css';
import React, { useState} from 'react';
import Header from './MyComponents/Header';
import WinnerWindow from './MyComponents/WinnerWindow';
import LoserWindow from './MyComponents/LoserWindow';
import Main from './MyComponents/Main';

function App() {
  
  const [isPlaying,setIsPlaying] = useState(true);
  const [winStatus,setWinStatus] = useState(null);
  const [actualWord, setActualWords] = useState(null); 
  return (
    <div className="App" >
      <Header></Header>
      {!isPlaying && winStatus && <WinnerWindow actualWord={actualWord}/>}
      
      {isPlaying && <Main setIsPlaying= {setIsPlaying} setWinStatus={setWinStatus} setActualWords={setActualWords}></Main>}
      {!isPlaying && !winStatus && <LoserWindow actualWord={actualWord}/>}
    </div>
  );
}

export default App;
