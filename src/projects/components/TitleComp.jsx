import React from 'react'

const TitleComp = ({ text ,txtCLass}) => {
    return (

        <div>
            <h1 className={`text-center ${txtCLass}`}>{!text ? "Title" : text}</h1>
            
        </div>
    )
}

export default TitleComp;