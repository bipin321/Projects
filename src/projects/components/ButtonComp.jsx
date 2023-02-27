import React from 'react'
import './Style.css'



const ButtonComp = ({ icon,name, btnClass , clickEvent }) => {
  return (
    <div>
      <button onClick={clickEvent} className={`btn ${btnClass}`}>
       {icon} {!name?"":name}
      </button>
    </div>
  )
}

export default ButtonComp;