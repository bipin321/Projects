import React from 'react'
import Temperature from '../components/Temperature'
import '../components/Style.css'
import { useState } from 'react'
import ButtonComp from '../components/ButtonComp'


const TemperatureApp = () => {

    const [temperature, setTemperature] = useState(0);
    
    // const colorChanger =()=>{
    //     let circle = document.getElementsByClassName("circle");
    //     if(temperature >0){
    //         circle.classList.add("bg-danger")
    //     }
    //     else if(temperature<0){
    //         circle.classList.add("bg-primary")
            
    //     }
    //     else{
    //         circle.classList.remove("bg-primary")
    //     }
    //     return circle;
    // }
    // colorChanger();

    return (
        <div className='container'>
            <div className='card w-40 m-auto'>
                <div className={`circle m-auto 
                ${temperature > 0 ? "bg-danger text-white": ""}
                ${temperature < 0 ? "bg-primary text-white": ""}
                `}>
                    <Temperature temperature={temperature} />
                </div>
                <div className='m-5 d-flex items-center justify-around'>
                    <ButtonComp btnClass={"btn-primary  px-1 fs-md"} name={"-"} clickEvent={()=> setTemperature(temperature-1)}/>
                    <ButtonComp btnClass={"btn-danger px-1 fs-md"} name={"+"} clickEvent={()=> setTemperature(temperature+1)}/>

                </div>
            </div>
        </div>
    )
}

export default TemperatureApp