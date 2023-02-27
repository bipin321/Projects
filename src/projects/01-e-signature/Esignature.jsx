import React, { useState } from 'react'
import TitleComp from './components/TitleComp';
import TitleComp from '../components/TitleComp'

const Esignature = () => {

  const [name, setName] = useState('Your Name');
  const [date, setDate] = useState('');

  const changeHandler = (e) => {
    setName(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const inputStyle = {
    border: "none",
    outline: "none",
    borderBottom: "2px dotted",
    padding: ".25rem 0",
  }

  document.body.style.background = "#eee"

  return (
    <div style={{ textAlign: "center" }}>

      <TitleComp text={name} />
      <TitleComp text={!date ? "DoB" : date} />
      <p>Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis ea modi
        similique ullam provident dolorum totam illum
        laudantium, tempore, aliquid facere libero quo
        omnis corporis explicabo aperiam. Quas, quia beatae!</p>


      <footer style={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        top: "40vh"
      }}>
        <input type="date" value={date} onChange={dateChangeHandler} style={inputStyle} />
        <input type="text" value={name} onChange={changeHandler} style={inputStyle} />

      </footer>
    </div>
  )
}

export default Esignature;