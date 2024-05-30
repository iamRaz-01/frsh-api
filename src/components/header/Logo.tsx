import logo from '../../assets/images/logo.png';
import React from 'react';
import '../../assets/css/header.css'
export const  Logo = () => {
    return <div className='logoContainer'>
        <img src={logo} alt="logo" />
        <p>FreshAPI</p>
    </div>

}