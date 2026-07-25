import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
        setError("");
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <div>GitHub UserName</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {user && (
        <div>
          <h2>{user.name || user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.bio || "No bio available"}</p>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </>
  );
}

export default App;
