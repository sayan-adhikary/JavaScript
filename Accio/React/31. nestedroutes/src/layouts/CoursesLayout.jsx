import React from 'react'
import { Outlet } from 'react-router'
function CoursesLayout() {
  return (
    <div>
        {/* Handle the nested routes */}
        {/* Part where nested component gets rendered */}
        <Outlet></Outlet>
    </div>
  )
}

export default CoursesLayout