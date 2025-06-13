import React from 'react';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

function WordGame({ score, setScore }) {
    const [word, setWord] = useState('');
    const [scrambled, setScrambled] = useState('');
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Unscramble the word, young adventurer!');
    const [showHint, setShowHint] = useState(false);
    const [showBalloons, setShowBalloons] = useState(false);

    useEffect(() => {
        fetchWord();
    }, []);

    const fetchWord = async () => {
        try {
            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/happy');
            const data = await response.json();
            if (data && data[0] && data[0].word) {
                const newWord = data[0].word.toLowerCase();
                setWord(newWord);
                setScrambled(scrambleWord(newWord));
                setGuess('');
                setShowHint(false);
                setMessage('Unscramble the word, young adventurer!');
            } else {
                setMessage('Oops! Couldn’t find a word. Try again!');
            }
        } catch (error) {
            setMessage('Oops! Couldn’t find a word. Try again!');
        }
    };

    const scrambleWord = (word) => {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        return letters.join('');
    };

    const checkGuess = () => {
        if (guess.toLowerCase() === word) {
            setScore(score + 10);
            setMessage('Yay! You got it! +10 points! New word coming up!');
            // Trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            // Show balloons for 3 seconds
            setShowBalloons(true);
            setTimeout(() => setShowBalloons(false), 3000);
            setTimeout(fetchWord, 1500);
        } else {
            setMessage('Oops! Try again, champ!');
        }
        setGuess('');
    };

    const getHint = () => {
        setShowHint(true);
        setMessage(`Hint: Starts with "${word[0]}" and ends with "${word[word.length - 1]}"!`);
    };

    return (
        <div className="game-container">
            <h2 className="section-title game-title">Word Scramble Quest</h2>
            <p className="message">{message}</p>
            <p className="scrambled-word">Scrambled Word: {scrambled}</p>
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="input-field"
                placeholder="Type your guess here!"
            />
            <div className="button-group">
                <button onClick={checkGuess} className="word-btn">Guess!</button>
                <button onClick={getHint} className="word-btn">Need a Hint?</button>
                <button onClick={fetchWord} className="word-btn">New Word</button>
            </div>
            <p className="score">Score: {score}</p>
            {showBalloons && (
                <div className="balloons">
                    <div className="balloon red"></div>
                    <div className="balloon blue"></div>
                    <div className="balloon yellow"></div>
                </div>
            )}
        </div>
    );
}

export default WordGame;