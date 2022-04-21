import React from 'react';
import './Signup.css'
import Crypto from '../assets/trade.png'
function Signup() {
    return (
        <div className='signup'>
            <div className="container">
                <div className="left">
                    <img src={Crypto} alt="" />
                </div>

                <div className="right">
                    <h2>Earn passive income with crypto</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold</p>
                    <div className="input_container">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;