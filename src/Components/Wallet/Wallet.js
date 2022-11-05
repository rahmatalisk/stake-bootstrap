import React from 'react';
import logo from '../../Images/Sapphire-Mark-New.png'
import logo3 from '../../Images/WalletConnect-Logo 1.png'
import logo2 from '../../Images/18060234 1.png'
import logo1 from '../../Images/metamask-recreated.png'
import './Wallet.css'

const Wallet = () => {
    return (
        <div>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className='flex-content'>
                <div className='wallet custom-container'>
                    <div className="custom-contents">
                        <div className="wallet-btn-group gap-4">
                        <button className="contents-btn">
                            <img className='me-2 me-md-5' src={logo1} alt="" />
                            M etamask Wallet</button>
                        <button className="contents-btn">
                            <img className='me-2 me-md-5' src={logo2} alt="" />
                            Coinbase Wallet</button>
                        <button className="contents-btn">
                            <img className='me-2 me-md-5' src={logo3} alt="" />
                            Wallet Connect</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;