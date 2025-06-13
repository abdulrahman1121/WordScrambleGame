import React from 'react';
import { useState } from 'react';

function AIChat() {
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi, buddy! I’m your AI pal! Ask me anything! 😊", sender: 'ai' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { text: chatInput, sender: 'user' }]);
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        'Great job, buddy! You’re super smart! 😊',
        'Wow, that’s a fun question! Keep it up! 😊',
        'You’re doing awesome, my friend! 😊',
        'I love your ideas, kiddo! 😊'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { text: randomResponse, sender: 'ai' }]);
      setIsTyping(false);
    }, 1000);
    setChatInput('');
  };

  return (
    <div className="chat-container">
      <h2 className="section-title chat-title">AI Chat Buddy</h2>
      <div className="chat-area">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        {isTyping && <p className="typing-indicator">AI Buddy is typing...</p>}
      </div>
      <div className="chat-input-group">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="input-field"
          placeholder="Chat with your AI buddy!"
          onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
        />
        <button onClick={handleChatSubmit} className="word-btn">Send</button>
      </div>
    </div>
  );
}

export default AIChat;