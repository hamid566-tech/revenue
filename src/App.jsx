import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import First from './component/First'
import Second_btn from './component/second_subcomponent/second_btn'
import Third_btn from './component/third/third_btn'
import Fourth_btn from './component/fourth_subcomponent/Fourth_btn'
import Fifth_btn from './component/Fifth_subcomponent/Fifth_btn'
import Sixth_btn from './component/sixth_subcomponent/sixth_btn'
import Seventh_btn from './component/seventh_subcomponent/Seventh_btn'
import Eight_btn from './component/eight_subcomponent/Eight_btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/first/*' element={<First/>}/>
          <Route path='/second/*' element={<Second_btn/>}/>
          <Route path='/third/*' element={<Third_btn/>}/>
          <Route path='/fourth/*' element={<Fourth_btn/>}/>
          <Route path='/fifth/*' element={<Fifth_btn/>}/>
          <Route path='/sixth/*' element={<Sixth_btn/>}/>
          <Route path='/seventh/*' element={<Seventh_btn/>}/>
          <Route path='/eight/*' element={<Eight_btn/>}/>
          
        
      </Routes>
    </HashRouter>
  )
}

export default App
