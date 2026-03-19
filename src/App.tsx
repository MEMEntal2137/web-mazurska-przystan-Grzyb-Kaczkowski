import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [range, setRange] = useState<number>(1);
    function handleRangeChange(e: ChangeEvent<HTMLInputElement>) {

        setRange(Number(e.target.value));
    }

  return (
    <>





















      
  )
}

export default App
