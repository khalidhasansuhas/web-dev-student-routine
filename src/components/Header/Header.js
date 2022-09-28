import React from 'react';
import logo from '../../image/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <a href="/home"><img src={logo} alt="" /></a>
            <div>
                <a href="/blog">Blog</a>
                <a href="/routine">Routine</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;