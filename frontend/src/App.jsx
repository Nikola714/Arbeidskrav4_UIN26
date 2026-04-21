import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Isabel from './components/Isabel'
import Nikola from './components/Nikola'
import Amanda from './components/Amanda'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route index element={<Home />}/>
    </Routes>
  )
}

export default App


