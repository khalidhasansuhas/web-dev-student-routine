import React from 'react';
import Info from '../Info/Info';
import Routine from '../Routine/Routine';
import './Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <div className="routine-container">
                <Routine></Routine>
            </div>
            <div className="info-container">
                <Info></Info>
            </div>
        </div>
    );
};

export default Main;