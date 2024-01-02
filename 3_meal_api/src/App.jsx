import { useState } from 'react'
import Meal from './Meal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Meal />
    </>
  )
}

export default App
