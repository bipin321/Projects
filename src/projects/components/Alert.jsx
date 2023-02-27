import React, { useState, useEffect } from 'react'
import './Style.css'
import { RiCloseLine } from 'react-icons/ri'
import ButtonComp from './ButtonComp'

const Alert = ({ alertType, text ,delay}) => {

  const [showalert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add("fadeAlert")
    
    setTimeout(()=>{
      setShowAlert(false);
    },500)
  }
  
  useEffect(()=>{
    delay &&
    setTimeout(()=>{
      setShowAlert(false)
    },4000)
  })
  
  return (
    showalert && <div className={`alert alert-${alertType}`}>
      <div className='d-flex justify-between'>
        <span onClick={closeAlert}>{text}</span>
        <ButtonComp
          btnClass={"btn-close text-white"}
          name={<RiCloseLine/>}
          clickEvent={closeAlert}
          />
      </div>

    </div>
  )
}

export default Alert;