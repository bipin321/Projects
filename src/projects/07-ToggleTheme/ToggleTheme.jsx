import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import '../components/Style.css'

import { ThemeContext, themes } from './context/ThemeContext'

const ToggleTheme = () => {

    const [theme, setTheme] = useState(themes.light);

    const changeTheme = () => {
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
    }

    let docBody = document.body;
    useEffect(() => {
        switch (theme) {
            case themes.light:
                docBody.classList.remove("bg-dark");
                docBody.classList.remove("text-white");
                docBody.classList.add("bg-light");
                docBody.classList.add("text-black");
                break;
            case themes.dark:
                docBody.classList.remove("bg-light");
                docBody.classList.remove("text-black");
                docBody.classList.add("bg-dark");
                docBody.classList.add("text-white");
                break;

        }
    })
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }} className='container'>

            <Blog />

        </ThemeContext.Provider>
    )
}

export default ToggleTheme