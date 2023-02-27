import React ,{useContext}from 'react'
import ButtonComp from '../components/ButtonComp'
import Title from '../components/TitleComp'
import {ThemeContext, themes} from './context/ThemeContext'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs';



const Blog = () => {
const {theme,changeTheme} = useContext(ThemeContext);
    return (
        <div className='text-center'>
            <ButtonComp btnClass={`${theme=== themes.light?"btn-dark":"btn.light"}  float-right mb-5`} icon={theme === themes.light?<BsFillMoonFill/>:<BsFillSunFill/> } clickEvent={changeTheme} />
            <Title text={`My Blogs in ${theme} Mode.`} />

            <h3 className='p-5 text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae quos quidem
                sint harum magni,   uid perferendis laudantium consequuntur recusandae nesciunt
                molestias nam temporibus quod at voluptatem voluptate hic rem praesentium, officia molestiae
                omnis mollitia aut in! Culpa porro, suscipit veniam enim eligendi itaque ratione facere
                corporis nam odit nobis ullam, placeat assumenda!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae quos quidem
                sint harum magni,   uid perferendis laudantium consequuntur recusandae nesciunt
                molestias nam temporibus quod at voluptatem voluptate hic rem praesentium, officia molestiae
                omnis mollitia aut in! Culpa porro, suscipit veniam enim eligendi itaque ratione facere
                corporis nam odit nobis ullam, placeat assumenda!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae quos quidem
                sint harum magni,   uid perferendis laudantium consequuntur recusandae nesciunt
                molestias nam temporibus quod at voluptatem voluptate hic rem praesentium, officia molestiae
                omnis mollitia aut in! Culpa porro, suscipit veniam enim eligendi itaque ratione facere
                corporis nam odit nobis ullam, placeat assumenda!
            </h3>
        </div>
    )
}

export default Blog