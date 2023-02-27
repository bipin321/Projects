import React, { useState } from 'react'
import TitleComp from '../components/TitleComp'
import '../components/Style.css'
import { AiOutlineComment, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import Krshna from './img/krsna.jpg';




const LikePhoto = () => {

    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    // let like = true;
    const toggleLike = () => {
        if (!like) {
            setCount(count+1)
            setLike(true);
        } else {
            setCount(count-1)
            setLike(false);
        }
    }
    return (
        <div className='container'>
            <TitleComp text={"Like App"} />
            <h2 className='text-center'>Like This Photo</h2>
            <div className="card card-dark m-auto w-3">
                <div className="card-header">
                    <small>Shree Krishna</small>
                </div>
                <img src={Krshna} alt="img" style={{ width: "100%", height: "100%" }} onDoubleClick={toggleLike} />
                <div className="card-footer d-flex justify-around items-center fs-md">
                    <AiOutlineComment />


                    <div className='d-flex items-center'>
                        <p style={{fontSize:"12px", color:"gray" , marginRight:"3px"}}>{count}</p>
                        {like ? <AiFillHeart className="text-danger" onClick={toggleLike} />
                            :
                            < AiOutlineHeart onClick={toggleLike} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikePhoto