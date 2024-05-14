import React from 'react'
import { useEffect,useState } from 'react'

const KeyboardRow = ({handleKeyPress,handleEnterPress,handleDelPress,letters,color}) => {
  

  const [buttonStyles, setButtonStyles] = useState({});

  const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2=[ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  useEffect(() => {
    const newButtonStyles = {};
    letters.forEach((letterRow,row) => {
      letterRow.forEach((word,index) => {
        word = word.toUpperCase();
        if(word){
            let bgColor = '';
            if( color[row][index]==='G'){
              // getButtonStyle(word,'#227526');
              bgColor = '#227526';
            }
            else if(color[row][index] === 'Y'){
              // getButtonStyle(word,'#8C8818');
              if(newButtonStyles[word] && newButtonStyles[word].backgroundColor != "#227526" && newButtonStyles[word].backgroundColor != "#1c2e4a" ){
                bgColor = '#8C8818';
              }
              else if(!newButtonStyles[word]){
                bgColor = '#8C8818';
              }
              else if(newButtonStyles[word] && newButtonStyles[word].backgroundColor === "#227526"){
                bgColor = '#227526';
              }
              else if(newButtonStyles[word] && newButtonStyles[word].backgroundColor === "#1c2e4a"){
                bgColor = '#1c2e4a';
              }
            }
            else if(color[row][index] === 'B'){
              // getButtonStyle(word,'#252525');
              bgColor = '#252525';
            }
            else if(color[row][index] === 'D'){
              bgColor = '#1c2e4a';
            }
            newButtonStyles[word] = { backgroundColor: bgColor };
            console.log("Rudviq Bahvsar",word," ",newButtonStyles[word].backgroundColor);
          }
          
      });
    });
    setButtonStyles(newButtonStyles);
  },[color]);
  

  return (
      <>
    
        <div className='keyboard-row'>
            {keys.map((key) => (
              <button
                key={key}
                type="button"
                className="keys"
                data-key={key}
                onClick={(e)=>handleKeyPress(e.target.dataset)} 
                style={buttonStyles[key]}
              >
                {key}
              </button>
            ))}
          </div>
        <div className="keyboard-row">
            <div data-testid="spacer" className="space"></div>
            {keys2.map((key) => (
              <button
                key={key}
                type="button"
                className="keys"
                data-key={key}
                onClick={(e)=>handleKeyPress(e.target.dataset)} 
                style={buttonStyles[key]}
              >
                {key}
              </button>
            ))}
            <div data-testid="spacer" className="space"></div>
        </div>
        <div className="keyboard-row">
            <button type="button" className="keys" onClick={handleEnterPress} style={{fontSize: '12px'}}>ENTER</button>
            {keys3.map((key) => (
              <button
                key={key}
                type="button"
                className="keys"
                data-key={key}
                onClick={(e)=>handleKeyPress(e.target.dataset)} 
                style={buttonStyles[key]}
              >
                {key}
              </button>
            ))}
            <button type="button" className="keys" onClick={handleDelPress} style={{fontSize: '12px'}}>DEL</button>
            
        </div>
    </>
  )
}

export default KeyboardRow
