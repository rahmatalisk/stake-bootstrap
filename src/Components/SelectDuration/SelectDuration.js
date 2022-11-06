import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/Sapphire-Mark-New.png'
import './SelectDuration.css'



const SelectDuration = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="header-logo">
                <img src={logo} alt="" />

            </div>
            <p className='text-center duration-text'>Select Duration</p>
            <div className='flex-content'>

                <div className='duration custom-container'>
                    <div className="custom-contents">
                        <div className="wallet-btn-group gap-4">
                            <button className="contents-btn duration-btn" onClick={()=>navigate("cost")}>

                                3 Month <sup>20%apy</sup></button>
                            <button className="contents-btn duration-btn">

                                6 Month <sup>32%apy</sup></button>
                            <button className="contents-btn duration-btn">

                                12 Month <sup>60%apy</sup></button>
                            <p className="text-center">All staking rewards are claimable daily</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDuration;