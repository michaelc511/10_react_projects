import { useState } from 'react'
import './App.css'
import ShoutInput from './components/ShoutInput'
import ShoutOutput from './components/ShoutOutput'

function App() {
  const [currentShout, setCurrentShout] = useState('');

  const updateShoutHandler = (event) =>{
    setCurrentShout(event.target.value);
  }

  return (
    <>
    <header className="App-Header">
      <h1>Shout App</h1>
    </header>
    <ShoutInput
      changed={updateShoutHandler}
    />
    <ShoutOutput
      shout={(currentShout).toUpperCase()}
    />
    </>
  )
}

export default App
/*
// Branch #gc_2_shoutapp 
  1. Git repo: https://github.com/graceaveris/React.js_shout_machine
  2. Video: https://www.youtube.com/watch?v=c2CwF39sTjM&list=PLLRUcDuffY1EzxcM_r_0nXLGaWsNWYOmE&index=29 
  3. Blog Article 
  4. Solution - Same as Q&A but use 'event.target.value' to access the text field
    1. Create the App.jsx with 'currentShout' as state and 
    the 'updateShoutHander' as the function with 'event' as an argument to use 
    the 'setCurrentShout' state funct to set it based on the 'event.target.value'

    2. In App.jsx, pass the state value to the 'ShoutOutput' comp and the state to the 'ShoutInput' comp

    3. In the 'ShoutInput' comp, we take in the state func 'setCurrentShout()' and 
    create an input text field. We have an 'onChange' event to call our function.
    This will use our state function to update the state based on the 'event.target.value' of the text field.

    4. In the 'ShoutOutput' comp, we have the state value 'currentShout' as the prop to show the value.
*/