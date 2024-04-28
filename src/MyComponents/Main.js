import React, { useState } from 'react'
import Game from './Game';
import Keyboard from './Keyboard';


const Main = () => {

  const [letters,setLetters] = useState(Array(5).fill(''));
  const [tries,setTries] = useState(0);
  const [nletter,setNletter] = useState(0);

  // const handleKeyPress = event =>{
  //   const key = event.target.dataset.key;
  //   setLetter(key);
  // }

  const handleKeyPress = (letter) => {
    const updatedLetters = [...letters];
    const index = updatedLetters.findIndex((l) => l === '');
    if (index !== -1) {
      updatedLetters[index] = letter.target.dataset.key;
      console.log(letter.target.dataset.key);
      setLetters(updatedLetters);
      
    }
  };

  return (
    <main className ="main">
        
        {/* <Game letter= {letter} tries={tries} nletter={nletter}></Game>*/}
        <Game letters={letters} tries={tries}></Game>
        <Keyboard handleKeyPress={handleKeyPress}></Keyboard>
        
    </main>
  )
}

export default Main

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
