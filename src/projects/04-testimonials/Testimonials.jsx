import React, { useState, useEffect } from 'react'
import ButtonComp from '../components/ButtonComp'
import TitleComp from '../components/TitleComp'
import { FaUserCircle } from 'react-icons/fa'
import { BsFilePostFill } from 'react-icons/bs'
import { MdModeComment } from 'react-icons/md'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState('');
    const [items, setItems] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [testimonials])
    return (
        <div className='container'>
            <TitleComp text={"Testimonials"} txtCLass={"primary"} />

            <div className='d-flex'>

                <ButtonComp
                    name={"Users"}
                    btnClass={"btn-primary"}
                    icon={<FaUserCircle />}
                    clickEvent={() => setTestimonials("Users")}
                />
                {/* <ButtonComp
                    name={"Photos"}
                    btnClass={"btn-primary"}
                    icon={<FaUserCircle />}
                    clickEvent={() => setTestimonials("Photos")}
                /> */}

                <ButtonComp
                    name={"Posts "}
                    btnClass={"btn-primary"}
                    icon={<BsFilePostFill />}
                    clickEvent={() => setTestimonials("Posts")}
                />

                <ButtonComp
                    name={"Comments"}
                    btnClass={"btn-primary"}
                    icon={<MdModeComment />}
                    clickEvent={() => setTestimonials("Comments")}
                />
            </div>

            <TitleComp
                txtCLass={!testimonials ? "faded" : "primary"}
                text={!testimonials ? "No Data Here! Select To Display Data" : testimonials}
            />


            {
                !items ? null : items.map((item) => {
                    return (
                        <div className="card card-primary m-2 " key={item.id}>
                     {!item.name?"":<h2 className='text-left m-2 bg-primary p-2 text-white'>{item.name}</h2>}
                     <div>
                        {!item.title? "":<h2 className='text-left m-2 bg-primary p-2 text-white'>{item.title}</h2>}
                        {!item.body? "" :<h4 className=''>{item.body}</h4>}
                     </div>
                     {/* {!item.thumbnailUrl?"":<img src={item.thumbnailUrl}className='w-2'/>} */}
                     {!item.email?"":<p className='text-right m-2'>- {item.email}</p>}
                        </div>

                    )
                })}
        </div>
    )
}

export default Testimonials;