import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/Sapphire-Mark-New.png'

import './Header.css'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className="header-logo">
            <img src={logo} alt="" />
            </div>
           
            <div className="header-container h-full">
                <div className="header-contents">
                    <h1>Stake your <span>GXB</span></h1>
                    <p>Earn Up To 60% apy</p>
                    <div className='header-btn-group'>
                        <button className='custom-btn wallet-btn ' onClick={()=>navigate("wallet")}>Connect Wallet</button>
                        <button className='custom-btn wallet-btn'>Staking Stats</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;