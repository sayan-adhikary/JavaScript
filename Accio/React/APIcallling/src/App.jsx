import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [followers, setFollowers] = useState(0)
  const [err, setError] = useState(false)

  async function getData() {
    try {
      let url = 'https://api.github.com/users/' + username
      const res = await fetch(url)
      const data = await res.json()

      let follower = Number(data.followers)
      if (isNaN(follower)) {
        setError(true)
      } else {
        setFollowers(follower)
      }
    } catch (error) {
      console.log('err', error)
      setError(true)
    }
  }

  if (err) {
    return (
      <>
        <h1>Error 404</h1>
      </>
    )
  }

  return (
    <>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button onClick={getData}>Get Github Data</button>
      <h1>{followers}</h1>
    </>
  )
}

export default App
