import React, { useEffect } from 'react';
import '../App.css';

const Winner = () => {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const actualWords = urlParams.get('actual_words');
        console.log('In winner', actualWords); // Use the value received from the URL parameters
    }, []);

    return (
        <div className="announce">
            <img src="./crown_win.png" alt="Crown" />
            <h4>Bravo !! That was a great guess !</h4>
        </div>
    );
};

export default Winner;
