import React, { useState,useEffect } from 'react'
import Game from './Game';
import Keyboard from './Keyboard';


const Main = (props) => {

  const [letters,setLetters] = useState(Array(6).fill('').map(() => Array(5).fill('')));
  const [tries,setTries] = useState(0);
  const [color, setColor] = useState(Array(6).fill('W').map(() => Array(5).fill('W')));
  const [duplicate, setDuplicate] = useState(null);
  const [wordExist,setWordExist] = useState(1);


  const checkDictionary = async (guessedWord) => {
    try{
      const path = "demo.csv";
      const response = await fetch(path);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const textContent = await response.text();

      const lines = textContent.split("\n"); // Split text content by line breaks
      const words = lines.map(line => {
          const columns = line.split(","); // Split each line by commas
          return columns[0].trim().toUpperCase(); // Extract the value from the first column (A column)
      }).filter(word => word !== ""); // Filter out any empty words

      //Check if user entered correct word that exists or not
      if(words.includes(guessedWord)){
        setWordExist(1);
        return 'Yes';
      }
      else{
        setWordExist(0);
        return 'No';
      }
    }
    catch(error){
      console.error('Error:', error);
    }
  };

  const findDuplicateLetters = (word) => {
    // Create an empty object to store letter counts
    const letterCount = {};
    console.log(word);
    // const letters = word.split('');

    // Iterate through each letter in the word
    for (const letter of word) {
      // Increment the count of the letter in the object
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Filter letters with counts greater than 1
    const duplicates = Object.keys(letterCount).filter(
      (letter) => letterCount[letter] > 1
    );

    return duplicates;
    
  };

 
  const generateColors = (guessedWord, actualArray) => {
   
    const newColor = [...color];
    console.log(guessedWord, actualArray);
    // console.log(duplicate);
    for (let k = 0; k < 5; k++) {
      if (actualArray.includes(guessedWord[k])) {
        if (actualArray[k] === guessedWord[k]) {
          // newColor[tries][k] = 'G';
          // if len of duplcate is more than 0 and the letter is in duplicate then assisng blue else green
          if(duplicate.length>0 && duplicate.includes(guessedWord[k])){
            newColor[tries][k] = 'D';
          }
          else{
            newColor[tries][k] = 'G';
          }
        } else {
          newColor[tries][k] = 'Y';
        }
      } else {
        newColor[tries][k] = 'B';
      }
    }

    setColor(newColor);
    console.log(color);
    // updateKeyboardBackground(color);
    if (newColor[tries].every((c) => c === 'G')) {
      // All letters are guessed correctly
      // Handle winning logic here
      console.log('All letters guessed correctly!');
    }
  };


  const handleKeyPress = (letter) => {
    const updatedLetters = [...letters];
    const index = updatedLetters[tries].findIndex((l) => l === '');
    if (index !== -1) {
      updatedLetters[tries][index] = letter.key;
      console.log(letter.key);
      setLetters(updatedLetters);
      
    }
  };


  const handleEnterPress= ()=>{
    const updatedLetters = [...letters];
    
    // const index = updatedLetters.findIndex((l) => l === '');
    if(updatedLetters[tries][4]){
        
        const guessedWord = updatedLetters[tries].join('').toUpperCase();
       

        //If word guessed is correct declare user as WINNER
        if(guessedWord===props.actualWord){
          console.log("You have guessed the right Word");
          // setWinStatus(true);
          // setIsPlaying(false);
          props.setIsPlaying(false);
          props.setWinStatus(true);
        }
        else{
         
        
          checkDictionary(guessedWord)
          .then(existenc => {
            console.log(existenc);
            if (existenc === "Yes") {
                generateColors(guessedWord, props.actualWord);
                if (tries < 5) {
                    setTries(tries + 1);
                }
                if (tries === 5) {
                    props.setIsPlaying(false);
                    props.setWinStatus(false);
                }
            } else {
                setShowNotification(true);
                setTimeout(() => {
                  setShowNotification(false);
                }, 2500); // Hide the notification after 2 seconds
                console.log('Word does not exist in the dictionary');
                updatedLetters[tries] = Array(5).fill('');
                setLetters(updatedLetters);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
       
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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    
  });

  useEffect(() => {
    // Call the function to find duplicate letters
    if (props.actualWord) {
        const duplicates = findDuplicateLetters(props.actualWord);
        setDuplicate(duplicates);
        console.log(duplicate);
    }
}, [props.actualWord]);

useEffect(() => {

      console.log(duplicate);

}, [duplicate]);

const [showNotification, setShowNotification] = useState(false);
useEffect(() => {
  if (showNotification) {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide the notification after 2 seconds
    return () => clearTimeout(timer);
  }
}, [showNotification]);

  return (
    <main className ="main">
        {showNotification && <div className="notification"><span className="message">The word does not exists</span></div>}
        {/* <Game letter= {letter} tries={tries} nletter={nletter}></Game>*/}
        <Game letters={letters} color={color}></Game>
        <Keyboard handleKeyPress={handleKeyPress} handleEnterPress={handleEnterPress} handleDelPress={handleDelPress} letters={letters} color={color}/>
        
    </main>
  )
}

export default Main;

