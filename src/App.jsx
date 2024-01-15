import { useState } from 'react'
import './App.css'
import Color from './components/Color';

function App() {
  const [color1, setColor1] = useState(138);
  const [color2, setColor2] = useState(131);
  const [color3, setColor3] = useState(198);

  const colorCreator = () => Math.floor(Math.random() * 250) + 1;

  const updateColorHandler = (event) => { // 'event' is optional for this case
    setColor1(colorCreator);
    setColor2(colorCreator);
    setColor3(colorCreator);
  }

  return (
    <div>
      <header className="App-Header">
        <h1>Color App</h1>
      </header>
      <div className="container">
        <Color
          c1={color1.toString()}
          c2={color2.toString()}
          c3={color3.toString()}
          clicked={updateColorHandler}
        />
      </div>
    </div>
  )
}

export default App
/*
// Branch #_desc 
  1. Git repo: https://github.com/graceaveris/React.js_random_colour_picker
  2. Video: https://www.youtube.com/watch?v=M8K5kRgFrcM&list=PLLRUcDuffY1EzxcM_r_0nXLGaWsNWYOmE&index=28 
  3. Blog Article 
  4. Solution
    1. In the App.jsx, we created 3 state for the colors and two functions. 
    'colorCreator' just makes a random # for the color
    'updateColorHandler' updates all the state colors 

    2. We create a component 'Color' and pass all state variables and the 'updateColorHandler' as props.

    3. In the 'Color' comp, we have a local variable 'newColor' to contain the 3 color # from props.
    We set the CSS to the 'newColor'. 

    4. In the 'div', added the 'onClick' event to change the state of the color #s. 
    If it's changed, React would re-render.
*/