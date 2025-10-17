import { useState } from 'react'

import './App.css'
import Button from './components/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Button onClick={() => setCount((count) => count + 1)}>
      Click Me
    </Button>
    <p>Count: {count}</p>
    </>
  )
}

export default App
