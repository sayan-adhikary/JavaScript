import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function GithubUser() {
    const params = useParams();
    console.log(params);
    const {username} = params;
    const [followers, setFollowers] = useState(0);

    async function githubData(usrname) {
        try{
            const res = await fetch(`https://api.github.com/users/${usrname}`)
            const data = await res.json();
            setFollowers(data["followers"]);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        githubData(username);

    }, [username])

  return (
    <div>
        <div>{username} LoggedIn</div>
        <div>You've {followers} followers</div>
    </div>
  )
}

export default GithubUser