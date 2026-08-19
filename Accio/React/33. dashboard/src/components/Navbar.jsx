import React from 'react'
import {NavLink} from 'react-router'

function Navbar() {
  return (
    <div style={{
        display: "flex",
        flexDirection : "column",
        "justifyContent" : "flex-start",
        gap: "1rem",
        height: "100%"
    }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar