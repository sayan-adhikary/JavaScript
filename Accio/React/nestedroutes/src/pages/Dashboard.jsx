import React from 'react'
import { Outlet } from 'react-router'
import Profile from './Profile.jsx'
import JobPortal from './JobPortal.jsx'
import { NavLink } from 'react-router'


function Dashboard() {
  return (
    <div style={{
      display:'flex',
      justifyContent: 'space-around',
      gap: '2rem',
      marginTop: '5rem',
      backgroundColor: 'steelblue'
    }}>
      <div style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'flex-start',
        gap:'1rem'
      }}>
        {/* Buttons for their navigation */}
        {/* <Profile></Profile>
        <JobPortal></JobPortal> */}
        <NavLink to={'/dashboard/profile'}>
          <button>Profile</button>
        </NavLink>
        <NavLink to={'/dashboard/jobportal'}>
          <button>JobPortal</button>
        </NavLink>

      </div>
      <div>
        <Outlet></Outlet>
        {/* 
         <Profile></Profile>
        <JobPortal></JobPortal>
         */}
      </div>
    </div>
  )
}

export default Dashboard