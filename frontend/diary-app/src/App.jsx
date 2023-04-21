import { useState } from 'react'
import Diary from './components/Diary/Diary'
import Login1 from './components/Logins/Login1'
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom'

function App() {

  console.log('App')
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/" element={<Login1/>}/>
        <Route path="/diary" element={<Diary/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}



export default App
