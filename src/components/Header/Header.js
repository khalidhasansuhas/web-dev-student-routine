import React from 'react';
import logo from '../../image/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/blog">Blog</a>
                <a href="/routine">Routine</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;