import React from 'react'
import TitleComp from '../01-e-signature/components/TitleComp'
import './components/Style.css'


const RandomColor = () => {


    const handleClick = (e) => {
        // console.log(getRandomColor());
        // let button = document.getElementsByTagName(<button></button>);
        // button.style.background = getRandomColor();
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.background = getRandomColor();
    }
    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        let i;
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem 8rem",
            alignItems: "center"
        }}>


            <TitleComp text={"RandomColor"} />
            <div>
                <button className='btn btn-danger' onClick={handleClick}>Click Me</button>
                <button className='btn btn-success' onClick={handleClick}>Click Me</button>
                <button className='btn btn-warning' onClick={handleClick}>Click Me</button>
                <button className='btn btn-primary' onClick={handleClick}>Click Me</button>

            </div>

        </div>
    )
}

export default RandomColor