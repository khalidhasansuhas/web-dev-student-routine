import React from 'react';
import Info from '../Info/Info';
import './Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <div className="routine-container">
                <h1>routine container</h1>
            </div>
            <div className="info-container">
                <Info></Info>
            </div>
        </div>
    );
};

export default Main;