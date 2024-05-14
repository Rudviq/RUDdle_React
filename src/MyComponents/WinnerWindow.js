import React, { useEffect } from 'react';
import '../App.css';

const Winner = (props) => {
    useEffect(() => {
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // const actualWords = urlParams.get('actual_words');
        console.log('In winner', props.actualWord); // Use the value received from the URL parameters
        console.log(props.meaning);
    }, []);

    return (
        <>
        <div className="announce">
            <img src="./crown_win.png" alt="Crown" />
            <h4>Bravo !! That was a great guess !</h4>
        </div>
        <div className="announce">
            <h4>{props.actualWord}</h4>
            <h5>{props.meaning}</h5>
        </div>
        </>
    );
};

export default Winner;
