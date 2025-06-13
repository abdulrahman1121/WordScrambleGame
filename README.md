Word Scramble & AI Chat Buddy

A kid-friendly web application built with Vite and React, featuring a word scramble game and a mock AI chat interface for young learners.
Features

Word Scramble Game:
Unscramble words from a dictionary API (e.g., “tac” → “cat”).
+10 points for correct guesses.
Hints show first and last letters.
Confetti bursts and balloons float up on correct answers.
Messages: “Yay! You got it!” or “Try again!”


AI Chat Widget:
Blue user messages (right), purple AI responses (left) with smiley emojis (😊).
Friendly, pre-programmed replies with typing animation.
Send via button or Enter key.


Design:
Vibrant gradient background, Comic Neue font, yellow buttons.
Responsive across desktop and mobile.
Animations for buttons, inputs, and balloons.



Technologies

React: Functional components with hooks.
JavaScript: Core logic.
CSS: Responsive styling and animations.
Node.js: v23.11.0 .


Gameplay

Word Scramble:
Unscramble the displayed word.
Enter guess, click “Guess!” or press Enter.
Correct guess: Confetti, balloons, +10 points, new word after 1.5s.
Use “Need a Hint?” or “New Word” buttons.


AI Chat:
Type a message, click “Send” or press Enter.
AI responds with a friendly message (e.g., “Great job! 😊”).



API

Word Scramble: Uses https://api.dictionaryapi.dev/api/v2/entries/en/happy.
AI Chat: Client-side mock responses.


