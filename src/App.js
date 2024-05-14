import './App.css';
import React, { useState,useEffect} from 'react';
import Header from './MyComponents/Header';
import WinnerWindow from './MyComponents/WinnerWindow';
import LoserWindow from './MyComponents/LoserWindow';
import Main from './MyComponents/Main';

function App() {
  
  const [isPlaying,setIsPlaying] = useState(true);
  const [winStatus,setWinStatus] = useState(null);
  const [actualWord, setActualWords] = useState(null); 
  console.log("Actual Word in App.js:", actualWord);
  // var randomIndex;
  // var meaning;
  const [meaning, setMeaning] = useState(null); 

  const fetchData = async () => {
    try {
      // const path = "words.txt";
        const path = "demo.csv";
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const textContent = await response.text();
        // const words = textContent.split(/\s+/);

        const lines = textContent.split("\n"); // Split text content by line breaks
        const words = lines.map(line => {
            const columns = line.split(","); // Split each line by commas
            return columns[0].trim().toUpperCase(); // Extract the value from the first column (A column)
        }).filter(word => word !== ""); // Filter out any empty words

        // const meaning1 = lines.map(line => {
        //   const columns = line.split(","); // Split each line by commas
        //   return columns[10]; // Extract the value from the first column (A column)
        // }).filter(word => word !== "");
       
        const meanings = lines.map(line => {
          const columns = line.split(",");
          let meaning = columns[1];
          for (let i = 11; i < columns.length; i++) {
              if (columns[i].trim() !== "") {
                  if (meaning !== "") {
                      meaning += ", "; // Add a comma if there's already a meaning
                  }
                  meaning += columns[i].trim();
              }
          }
          return meaning;
      }).filter(meaning => meaning !== "");

        const randomIndex = Math.floor(Math.random() * words.length);
        setMeaning(meanings[randomIndex]);
        console.log(meaning);
        const randomWord = words[randomIndex].toUpperCase();
        // const randomWord = words[props.randomIndex].toUpperCase();
        console.log(randomWord);
        setActualWords(randomWord);
        // setActualWord(randomWord);
    } catch (error) {
        console.error('Error:', error);
    }
};
  
  useEffect(() => {
    
    
    fetchData();
}, []);

  return (
    <div className="App" >
      <Header></Header>
      {!isPlaying && winStatus && <WinnerWindow actualWord={actualWord} meaning={meaning}/>}
      
      {isPlaying && <Main setIsPlaying= {setIsPlaying} setWinStatus={setWinStatus} setActualWords={setActualWords}  actualWord={actualWord} ></Main>}
      {!isPlaying && !winStatus && <LoserWindow actualWord={actualWord} meaning={meaning}/>}
    </div>
  );
}

export default App;
