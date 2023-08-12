import React from 'react'
import Login from './Login/Login'
import Select_test from './select test/Select_test'
import { Routes,Route } from 'react-router-dom'
import Html from './html/Html'
import Css from './css/Css'
import Java from './java/Java'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/test' element={<Select_test/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/java' element={<Java/>}/>
      </Routes>
    </div>
  )
}

export default App

