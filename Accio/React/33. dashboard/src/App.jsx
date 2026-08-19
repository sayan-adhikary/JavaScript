import React from 'react'
import {Routes, Route} from 'react-router'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <div style={
      {
        display: "flex",
        justifyContent: "space-between",
        height: "100vh"
      }
    }>
      <div style={{
        backgroundColor: "lightpink",
        width: "20%",
        heigth : "100vh"
      }}>
        <Navbar></Navbar>
      </div>
      <div style={{
        backgroundColor: "skyblue",
        width: "75%"
      }}>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App