import React from 'react';
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='Container'>
            <a href='/SignIn'>Sign in</a>
            <span className='Container-divider'>|</span>
            <a href='/SignUp'>Sign up</a>
        </div>
    );
}

export default NavBar;
