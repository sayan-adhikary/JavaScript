import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '3rem'
    }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/courses'>Cources</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </div>
  )
}

export default Navbar