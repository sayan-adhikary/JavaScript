import { useState } from 'react'
import Celcius from './Celcius.jsx';
import Ferh from './Ferh.jsx';
import './App.css'

function App() {
  const [celcius, setCelcius] = useState("");
  const [formCelcius, setFormCelcius] = useState("");

  // return (
  //   <>
  //   <Celcius temp = {celcius} setTemp = {setCelcius} form = {formCelcius} setForm = {setFormCelcius}/>
  //   <Ferh temp = {celcius} />
  //   </>
  // )

  return (
  <div className="app">
    <Celcius
      temp={celcius}
      setTemp={setCelcius}
      form={formCelcius}
      setForm={setFormCelcius}
    />
    <Ferh temp={celcius} />
  </div>
);
}

export default App
