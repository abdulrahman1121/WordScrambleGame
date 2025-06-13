import { useState } from 'react';
import WordGame from './components/WordGame';
import AIChat from './components/AIChat';
import './styles/App.css';
import React from 'react';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app-container">
      <h1 className="app-title">Kid-Friendly Word Adventure & AI Chat Buddy</h1>
      <WordGame score={score} setScore={setScore} />
      <AIChat />
    </div>
  );
}

export default App;