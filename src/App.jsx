import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import First from './component/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/first/*' element={<First/>}/>
        
      </Routes>
    </HashRouter>
  )
}

export default App
