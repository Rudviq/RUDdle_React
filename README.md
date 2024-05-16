[![ruddle](https://github.com/Rudviq/RUDdle_React/assets/60641746/8009e413-001b-4c6f-a77c-4f524a0b1e21)](https://ruddle.netlify.app/)

Click above to begin playing the game

# RUDdle - A Word Guessing Game
RUDdle is a word guessing game inspired by the popular game Wordle. In RUDdle, players have 6 tries to guess a 5-letter word. Each guess is represented by a color code indicating the correctness of the guessed letters.

## How to Play
**Objective**: Guess the secret 5-letter word within 6 tries.

**Guessing**: Enter a 5-letter word into the input field.

**Color Codes**:
- Green: Letter present in the correct position in the secret word.
- Blue: Letter present in the correct position and occurs more than one time in the secret word.
- Yellow: Letter present in the secret word but in a different position.
- Grey: Letter not present in the secret word.

**Feedback**: Use the color codes to adjust your guesses in subsequent attempts.

**Winning**: Guess the correct word within 6 tries to win the game.

## Technologies Used
- React JS
- JSX
- JavaScript

## Getting Started
**Installation**: Clone the repository to your local machine.

**Setup**: Run npm install to install dependencies.

**Run**: Start the game by running npm start.

**Play**: Access the game in your web browser and start guessing!

## Demo

<img src="https://github.com/Rudviq/RUDdle_React/assets/60641746/7f9f8cb1-0323-469f-bf9e-c46a801e2544" style="width:600px;">


*Caption: Main game interface.*

Actual Word Here is: AVOID

<img src="https://github.com/Rudviq/RUDdle_React/assets/60641746/2853d65c-50eb-4d42-af40-9fe698114cd7" style="width:600px;">

*Caption: Main game interface with color feedback. Here the word guessed is 'SMART'. As 'AVOID' does not have any letters from 'SMART' except 'A' all are greyed, while 'A' is in 'AVOID' but not at the same position so the color will be yellow*

<img src="https://github.com/Rudviq/RUDdle_React/assets/60641746/c323a3d5-1369-4b2c-93c6-1cc6fab0c112" style="width:600px;">

*Caption: Main game interface with color feedback for 2nd Try. Here the word guessed is 'DROID'. The common letters here are 'O','I','D' and the positions of the letters are same as that of actual word 'AVOID', hence the last three letters are in green color. While the letter of 'DROID' is 'D' which exists in 'AVOID' too but not at the same position, hence it gets yellow color.*

<img src="https://github.com/Rudviq/RUDdle_React/assets/60641746/ed562b6d-5ba9-4b00-b3d9-6aa600b924ec" style="width:600px;">

*The player wins the game after guessing the correct word*

## Contributing
Contributions are welcome! Feel free to submit pull requests or raise issues for any improvements or features you'd like to see in RUDdle.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
