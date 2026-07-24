import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function getData(e) {
    e?.preventDefault()

    if (!username.trim()) {
      setError('Please enter a GitHub username.')
      setUserData(null)
      return
    }

    setLoading(true)
    setError('')
    setUserData(null)

    try {
      const res = await fetch(`https://api.github.com/users/${username.trim()}`)
      if (!res.ok) {
        throw new Error('User not found')
      }

      const data = await res.json()
      setUserData(data)
    } catch (err) {
      setError(err.message || 'Unable to fetch GitHub data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-shell">
      <div className="card">
        <h1>GitHub Profile Lookup</h1>
        <p>Search a GitHub username to view their public profile details.</p>

        <form onSubmit={getData} className="search-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            aria-label="GitHub username"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </form>

        {error && <p className="message error">{error}</p>}

        {userData && (
          <div className="profile">
            <img src={userData.avatar_url} alt={userData.login} />
            <div className="profile-info">
              <h2>{userData.name || userData.login}</h2>
              <p className="login">@{userData.login}</p>
              <p>{userData.bio || 'No bio available.'}</p>
              <div className="stats">
                <span>{userData.public_repos} repos</span>
                <span>{userData.followers} followers</span>
                <span>{userData.following} following</span>
              </div>
              {userData.location && <p>Location: {userData.location}</p>}
              {userData.html_url && (
                <a href={userData.html_url} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
