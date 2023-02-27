import React from 'react'
import '../components/Style.css'
import './Slider.css'


const Slider = ({ handleInput , sliderValue}) => {
  return (
    <input type="range"
      className='slider mb-2'
      value={sliderValue}
      onInput={handleInput} 
      maxLength={100}/>

  )
}

export default Slider