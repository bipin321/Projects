import React, { useState, useEffect } from 'react'
import Slider from './Slider'
import '../components/Style.css'
import { BsFillUnlockFill, BsBatteryHalf } from 'react-icons/bs'
import { TbAlarm } from 'react-icons/tb'
import { GiNetworkBars } from 'react-icons/gi'
import { BsFillRecordCircleFill } from 'react-icons/bs'
import { MdOutlineMusicOff } from 'react-icons/md'

const SwipperApp = () => {
    const [date, setDate] = useState(new Date());
    const [lockSlider, setLockSlider] = useState(true);
    const [sliderValue, setSliderValue] = useState(0);
    const [uiProps, setUiProps] = useState({
        uiText: "Home Screen",
        uiBg: `url("https://w0.peakpx.com/wallpaper/826/761/HD-wallpaper-ram-black-fire.jpg") center/cover`,
        uiBg2: `url("https://wallpaper.dog/large/1002529.jpg") center/cover`,
        uiColor: "#eee",
    });

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);


    const handleSliderInput = (e) => {
        setSliderValue(e.target.value);
        sliderValue > 97 ? setLockSlider(false) : setLockSlider(true);

    }

    const switchLock = () => {
        setLockSlider(true);
        setSliderValue(0);
    }
    return (
        <div className='text-white text-center '>



            {
                lockSlider ?
                    (
                        <div className='m-auto d-flex flex-col justify-between'
                            style={{
                                height: "70vh",
                                width: 300,
                                marginTop: "12vh",
                                border: "4px solid #535458",
                                borderRadius: "25px",
                                background: uiProps.uiBg2,
                                padding: "0 0.45rem",
                                paddingBottom: "1rem",
                            }}>
                            <div className='d-flex justify-between fs-sm'>
                                <div className='d-flex items-center'>
                                    <p>N-cell</p>
                                    <MdOutlineMusicOff className='ml-1' />
                                    <TbAlarm className='' />
                                </div>
                                <div className='d-flex items-center'>
                                    <BsFillRecordCircleFill style={{ color: "#2D2D2D", position:"fixed"}} />
                                </div>
                                <div className='d-flex items-center'>
                                    <GiNetworkBars />
                                    <GiNetworkBars className='ml-1' />
                                    <BsBatteryHalf className='ml-1 fs-md' />
                                </div>
                            </div>

                            <div>
                                <h2>
                                    {date.toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,

                                    })}
                                </h2>
                                <h3>
                                    {date.toLocaleString('en-US', {
                                        weekday: "long",
                                    })}
                                </h3>
                            </div>

                            <div>
                                <h5>Swipe to unlock</h5>
                                <Slider
                                    sliderValue={sliderValue}
                                    handleInput={handleSliderInput} />
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='m-auto text-white d-flex flex-col justify-between '
                            style={{
                                height: "70vh",
                                width: 300,
                                marginTop: "12vh",
                                border: "4px solid #535458",
                                borderRadius: "25px",
                                background: uiProps.uiBg,
                                padding: "0 0.45rem",
                                paddingBottom: "1rem",
                            }}>

                            <div className='d-flex justify-between fs-sm'>
                                <div className='d-flex items-center'>
                                    <p>
                                        {date.toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true,
                                        })}
                                    </p>
                                    <TbAlarm className='ml-1' />
                                </div>
                                <div className='d-flex items-center'>
                                    <BsFillRecordCircleFill style={{ color: "#2D2D2D" }} />
                                </div>
                                <div className='d-flex items-center'>
                                    <GiNetworkBars />
                                    <GiNetworkBars className='ml-1' />
                                    <BsBatteryHalf className='ml-1 fs-md' />
                                </div>
                            </div>

                            <div >
                                <BsFillUnlockFill
                                    onClick={switchLock}
                                    className='unlockIcon'
                                    title='Click To Lock'
                                />
                            </div>

                        </div>)}

        </div>


    )
}

export default SwipperApp;