import React, { useState,useEffect } from 'react'
import Game from './Game';
import Keyboard from './Keyboard';


const Main = (props) => {

  const [letters,setLetters] = useState(Array(6).fill('').map(() => Array(5).fill('')));
  const [tries,setTries] = useState(0);
  const [actualWord,setActualWord] = useState(null);
  const [color, setColor] = useState(Array(6).fill('W').map(() => Array(5).fill('W')));

  useEffect(() => {
      const fetchData = async () => {
          try {
            const path = "words.txt";
              const response = await fetch(path);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const textContent = await response.text();
              const words = textContent.split(/\s+/);
              const randomIndex = Math.floor(Math.random() * words.length);
              const randomWord = words[randomIndex].toUpperCase();
              console.log(randomWord);
              props.setActualWords(randomWord);
              setActualWord(randomWord);
          } catch (error) {
              console.error('Error:', error);
          }
      };
      
      fetchData();
  }, []);

  const generateColors = (guessedWord, actualArray) => {
   
    const newColor = [...color];

    for (let k = 0; k < 5; k++) {
      if (actualArray.includes(guessedWord[k])) {
        if (actualArray[k] === guessedWord[k]) {
          newColor[tries][k] = 'G';
        } else {
          newColor[tries][k] = 'Y';
        }
      } else {
        newColor[tries][k] = 'B';
      }
    }

    setColor(newColor);
    console.log(color);
    if (newColor[tries].every((c) => c === 'G')) {
      // All letters are guessed correctly
      // Handle winning logic here
      console.log('All letters guessed correctly!');
    }
  };

  // const updateKeyboardBackground = (letterKeys) => {
  //   letterKeys.forEach((keyElement, index) => {
  //     const backgroundColor = window.getComputedStyle(keyElement).getPropertyValue('background-color');
  //     if (color[index] === 'G') {
  //       keyElement.style.background = '#227526';
  //     } else if (color[index] === 'Y') {
  //       if (backgroundColor !== 'rgb(34, 117, 38)') {
  //         keyElement.style.background = '#8C8818';
  //       }
  //     } else if (color[index] === 'B') {
  //       keyElement.style.background = '#252525';
  //     }
  //   });
  // };

  const handleKeyPress = (letter) => {
    const updatedLetters = [...letters];
    const index = updatedLetters[tries].findIndex((l) => l === '');
    if (index !== -1) {
      updatedLetters[tries][index] = letter.key;
      console.log(letter.key);
      setLetters(updatedLetters);
      
    }
  };

  const handleEnterPress=()=>{
    const updatedLetters = [...letters];
    // const index = updatedLetters.findIndex((l) => l === '');
    if(updatedLetters[tries][4]){
        
        const guessedWord = updatedLetters[tries].join('').toUpperCase();
        generateColors(guessedWord,actualWord);
        if(guessedWord===actualWord){
          console.log("You have guessed the right Word");
          // setWinStatus(true);
          // setIsPlaying(false);
          props.setIsPlaying(false);
          props.setWinStatus(true);
        }
        else{
          // setLetters(Array(5).fill(''));
          {tries<5 && setTries(tries+1)}
          if(tries===5){
            // setWinStatus(false);
            // setIsPlaying(false);
            props.setIsPlaying(false);
            props.setWinStatus(false);
          }
        } 
    }
  }

  const handleDelPress=()=>{
    const updatedLetters = [...letters];
    const index = updatedLetters[tries].findIndex((l) => l === '');
    if(updatedLetters[tries][4] ){
      updatedLetters[tries][4] = '';
      setLetters(updatedLetters);
    }
    else{
      updatedLetters[tries][index-1] = '';
      setLetters(updatedLetters);
    }
  }

  const handledecideKeyPress = (event) => {
    if (event.keyCode === 13) {
        handleEnterPress();
    } else if (event.keyCode === 8) {
        handleDelPress();
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        handleKeyPress(event);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
        handledecideKeyPress(event);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <main className ="main">
        
        {/* <Game letter= {letter} tries={tries} nletter={nletter}></Game>*/}
        <Game letters={letters} color={color}></Game>
        <Keyboard handleKeyPress={handleKeyPress} handleEnterPress={handleEnterPress} handleDelPress={handleDelPress}></Keyboard>
        
    </main>
  )
}

export default Main;


// import React, { useState, useEffect } from 'react';

// const Main = () => {
//     const [actualWords, setActualWords] = useState('');
//     const [playing, setPlaying] = useState(true);
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [guessedWord, setGuessedWord] = useState('');
//     const [keyboardState, setKeyboardState] = useState(Array(26).fill(''));

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('words.txt');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const textContent = await response.text();
//                 const words = textContent.split(/\s+/);
//                 const randomIndex = Math.floor(Math.random() * words.length);
//                 const randomWord = words[randomIndex].toUpperCase();
//                 setActualWords(randomWord);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleLetterClick = (index) => {
//         if (playing && guessedWord.length < actualWords.length) {
//             const letter = String.fromCharCode(65 + index);
//             setGuessedWord(guessedWord + letter);
//         }
//     };

//     const handleBackspace = () => {
//         if (playing && guessedWord.length > 0) {
//             setGuessedWord(guessedWord.slice(0, -1));
//         }
//     };

//     const handleEnterKeyPress = () => {
//         if (playing && guessedWord.length === actualWords.length) {
//             setPlaying(false);
//             // Perform actions for winning the game
//         }
//     };

//     const handleKeyPress = (event) => {
//         if (event.keyCode === 13) {
//             handleEnterKeyPress();
//         } else if (event.keyCode === 8) {
//             handleBackspace();
//         } else if (event.keyCode >= 65 && event.keyCode <= 90) {
//             handleLetterClick(event.keyCode - 65);
//         }
//     };

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             handleKeyPress(event);
//         };

//         document.addEventListener('keydown', handleKeyDown);

//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     });



//     return (
//         <main className="main">
//             <div className="container" style={{ overflow: 'unset' }}>
//                 <div className="game">
//                     {[...Array(6)].map((_, index) => (
//                         <div key={index} className="game-container">
//                             {[...Array(5)].map((_, letterIndex) => (
//                                 <div key={letterIndex} className="letter">
//                                     <div className="letter-keys">
//                                         {guessedWord[5 * index + letterIndex]}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="keyboard">
//                 <div className="keyboard-row">
//                     {[...Array(10)].map((_, index) => (
//                         <button
//                             key={index}
//                             type="button"
//                             className="keys"
//                             onClick={() => handleLetterClick(index)}
//                             disabled={!playing || guessedWord.length >= actualWords.length}
//                         >
//                             {String.fromCharCode(65 + index)}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="keyboard-row">
//                     {[...Array(9)].map((_, index) => (
//                         <button
//                             key={index}
//                             type="button"
//                             className="keys"
//                             onClick={() => handleLetterClick(index + 10)}
//                             disabled={!playing || guessedWord.length >= actualWords.length}
//                         >
//                             {String.fromCharCode(75 + index)}
//                         </button>
//                     ))}
//                     <button
//                         type="button"
//                         className="keys"
//                         onClick={handleBackspace}
//                         disabled={!playing || guessedWord.length === 0}
//                     >
//                         DEL
//                     </button>
//                 </div>
//                 <div className="keyboard-row">
//                     <button
//                         type="button"
//                         className="keys"
//                         onClick={handleEnterKeyPress}
//                         disabled={!playing || guessedWord.length !== actualWords.length}
//                     >
//                         ENTER
//                     </button>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Main;
