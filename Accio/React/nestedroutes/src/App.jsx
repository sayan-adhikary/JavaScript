import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes, Route, Navigate} from 'react-router'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Mern from './pages/Mern.jsx'
import Java from './pages/Java.jsx'
import Da from './pages/Da.jsx'
import CoursesLayout from './layouts/CoursesLayout.jsx'
import Profile from './pages/Profile.jsx'
import JobPortal from './pages/JobPortal.jsx'
import ProfileLayout from './layouts/ProfileLayout.jsx'
import GithubUser from './pages/GithubUser.jsx'

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<CoursesLayout></CoursesLayout>}>
          <Route index path='' element={<Courses></Courses>}></Route>
          <Route path='mern' element={<Mern></Mern>}></Route>
          <Route path='java' element={<Java></Java>}></Route>
          <Route path='da' element={<Da></Da>}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        {/* redirecting */}
        {/* /dashboard => /dashbboard/profile */}
          <Route path='' element={<Navigate to='profile'></Navigate>}></Route>

          {/* Rendering the Profile page on the /dashboard/ */}
          {/* <Route path='' element={<Profile></Profile>}></Route> */}
          <Route path='profile' element={<ProfileLayout></ProfileLayout>}>
            <Route index path='' element={<Profile></Profile>}></Route>
            <Route path=':username' element={<GithubUser></GithubUser>}></Route>
          </Route>
          <Route path='jobportal' element={<JobPortal></JobPortal>}></Route>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App