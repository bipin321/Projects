import React, { useState } from 'react'
import { BsBorder } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import '../components/Style.css'

const HiddenSearchBar = () => {

    let inputStyle = {
        outline: "none",
        // borderRadius: "18px",
        border:"none",
        borderBottom: "2px solid gray",
        fontSize: 20,
        padding: "4px 10px",
        color:"gray",
        background:"transparent"
    }
    let searchStyle = {
        fontSize: 30,
        cursor: "pointer",
        position: "absolute",
        top: 20,
        right: 20,
    }
    return (
        <div className='container text-center'>
            <input type="text" placeholder='Search' style={inputStyle} />
            <RiSearchLine style={searchStyle} />
        </div>
    )
}

export default HiddenSearchBar