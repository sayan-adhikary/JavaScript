import React, { use, useState } from 'react'
import { useNavigate } from 'react-router';

function Profile() {

    // submit => profile/:username
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/dashboard/profile/${username}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Github username'/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Profile