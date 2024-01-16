import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question';

function App() {
  const [question, setQuestion] = useState('What is USA?');
  const [answer, setAnswer] = useState('A country.');

  // event is optional in this case 
  const revealAnswer = (event) => {
    setQuestion(answer);
  }
 

  return (
    <>
      <div>
        <header className="App-header">
          <h1>1 Q&A App</h1>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </header>
        <Question 
          question={question} 
          revealAnswer={revealAnswer} 
          />
      </div>
    </>
  );
}

export default App

/*
 
// 1. Q&A App - Branch gc_1_q Q&A App 
  1. Git: https://github.com/graceaveris/React.js_Question_and_Answer_App.js
  2. Video: https://www.youtube.com/watch?v=Vi9G9i-bEQ8&list=PLLRUcDuffY1EzxcM_r_0nXLGaWsNWYOmE&index=30 
  3. Blog Article 
  4. Solution
  Created a Q&A app. 
  In the App.jsx with the 'question' and 'answer' as the states
  We have a function using => as const revelAnswer with 'event' as the param. 
  The 'revealAnswer(event)' function would simply set the state for the 'question' state with the answer

  For the 'Question' comp, we pass in the 'question' and the function 'revealAnswer'

  Inside the 'Question' comp, we accept the props using destructuring.
  The event 'onClick' triggers our function and we show the 'question' with the 'answer'. 

  What we did was we had state and function in the parent component.
  Passed it to the child comp. 
  The child comp has an 'onClick' event to use the function to change the parent state variable. 
*/