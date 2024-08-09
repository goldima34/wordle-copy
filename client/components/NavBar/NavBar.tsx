import React from 'react';
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='Container'>
            <a href='/authorization/signIn'>Signin</a>
            <span className='Container-divider'>|</span>
            <a href='/authorization/signUp'>Signup</a>
        </div>
    );
}

export default NavBar;
