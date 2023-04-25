import { useState } from 'react'
import Diary from './components/Diary/Diary'
import Login1 from './components/Logins/Login1'
import Login2 from './components/Logins/Login2'
import Login3 from './components/Logins/Login3'
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom'

function App() {

  console.log('App')
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/login1" element={<Login1/>}/>
        <Route path="/login2" element={<Login2/>}/>
        <Route path="/login3" element={<Login3/>}/>
        <Route path="/diary" element={<Diary/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}



export default App
