import { useState } from 'react'

function App() {
  let [user, setUser] = useState({
    name : "Ramesh",
    age : 25,
    city : "Chennai"
  })

  let [formData, setFormData] = useState({
    name : "Neymar",
    age : "34",
    city: "Favela"
  })

  function updateKey(key, val){
    // Why are we making shallow copy 
    // because setUser => renders things when gets a new value
    // user[key] = val;
    // setUser(user);

    // 
    let newUser = {...formData};
    newUser[key] = val;
    setFormData(newUser);
  }

  function handleSubmit(e){
    e.preventDefault();
    setUser({...formData});
  }

  function handleChange(e){
    // e.target => input => e.target.value => value
    let value = e.target.value;
    // e.target.name => key
    let key = e.target.name;

    setFormData({
      ...formData,
      [key] : value
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>
      <br />
      <br />
      <label htmlFor="age">Age</label>
      <input type="text" name="age" id="age" value={formData.age} onChange={handleChange}/>
      <br />
      <br />

      <label htmlFor="city">City</label>
      <input type="text" name="city" id="city" value={formData.city} onChange={handleChange}/>

      <br />
      <br />

      <button>Submit</button>
    </form>

    <h1>Learning Complex States</h1>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.city}</h1>
    </>
  )
}

export default App
