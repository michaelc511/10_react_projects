import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FruitFact from "./components/FruitFact";

function App() {
  const [fruits, setFruits] = useState([
    { name: "Banana", fact: "I am yellow." },
    { name: "Peach", fact: "I am fuzzy." },
    { name: "Apple", fact: "I am red." },
  ]);

  const [showFruits, setShowFruits] = useState(false);

  const [showFruitMessage, setShowFruitMessage] = useState(
    "Show me fruit facts"
  );

  const toggleFruitFactsHandler = () => {
    const currentlyShowing = showFruits;
    setShowFruits(!currentlyShowing);
    if (!currentlyShowing) {
      setShowFruitMessage("Show me fruit facts");
    } else {
      setShowFruitMessage("Fruit facts are boring");
    }
  };

  // place the content we wish to render conditionally

  let fruitFacts = null;
  if (showFruits) {
    fruitFacts = (
      <div className="container">
        <FruitFact fruit={fruits[0].name} fact={fruits[0].fact} />

        <FruitFact fruit={fruits[1].name} fact={fruits[1].fact} />

        <FruitFact fruit={fruits[2].name} fact={fruits[2].fact} />
      </div>
    );
  }

  return (
    <>
      <header className="App-Header">
        <h1>App</h1>
      </header>
      <div className="container">
        <button onClick={toggleFruitFactsHandler}>{showFruitMessage}</button>
     
        <div>
          {showFruits? fruits.map((fruit, i) => {
              return <FruitFact key={i} fruit={fruit.name} fact={fruit.fact} />;
          }): ''}
        </div>

      </div>
    </>
  );
}

export default App;
/*
// Branch #_desc 
  1. Git repo: https://github.com/graceaveris/React.js_fruit_fact_revealer
  2. Video: https://www.youtube.com/watch?v=Uj7M5dLcPAI&list=PLLRUcDuffY1EzxcM_r_0nXLGaWsNWYOmE&index=27
  3. Blog Article: 
  4. Solution:

*/
