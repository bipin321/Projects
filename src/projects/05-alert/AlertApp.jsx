import React from 'react'
import Alert from '../components/Alert'

const AlertApp = () => {
  return (
    <div>
        <Alert alertType={"success"} text={"Sucessfull"}/>
        {/* <Alert alertType={"error"} text={"Process Failed"}/>
        <Alert alertType={"primary"} text={"Click Cancel To Close"} delay={true}/> */}
    </div>
  )
}

export default AlertApp