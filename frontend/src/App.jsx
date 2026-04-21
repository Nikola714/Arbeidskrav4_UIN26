import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components /Home'
import Amanda from './components /Amanda'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route index element={<Home />} />
      <Route path="amanda" element={<Amanda />} />

    </Routes>
    
  )
}

export default App
