import React from 'react'
import mern from '../assets/mern.png'
import { NavLink } from 'react-router'

function Card(props) {
    const {courseName, time} = props;
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem'
    }}>
        <img style={{
            height: '200px'
        }} src={mern} alt="" />
        <h3>{courseName}</h3>
        <h3>{time}</h3>
        <NavLink to={`/courses/${courseName}`}>
            <button>{courseName} Course</button>
        </NavLink>
    </div>
  )
}

export default Card