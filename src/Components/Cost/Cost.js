import React from 'react';
import logo from '../../Images/Sapphire-Mark-New.png'
import './Cost.css';

const Cost = () => {
    return (
        <div>
            <div className="header-logo">
                <img src={logo} alt="" />

            </div>
            <p className='text-center duration-text'>12 Month</p>
            <div className='flex-content cost-contents'>
                

                <div className='duration custom-container'>
                
                    <div className="custom-contents cost-content">
                    <span className='text-end number-text'>0x343....32</span>
                        <div className="wallet-btn-group gap-4">
                            <button className="contents-btn duration-btn">

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

export default Cost;