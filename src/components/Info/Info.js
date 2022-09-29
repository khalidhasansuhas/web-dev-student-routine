import React from 'react';
import profile from '../../image/Profile.png';

import './Info.css'

const Info = (props) => {

    const {info} =props;
    // console.log(info);

    let total = 0;
    for(const routine of info ){
        total = total + routine.time;
    }
    return (
        <div className='info-container'>
            <div className='info'>
                <h1>Info</h1>
                <div className="student">
                    <img src={profile} alt="" />
                    <div>
                        <h5>Khalid Hasan</h5>
                        <small>Dhaka, Bangladesh</small>
                    </div>
                </div>
                <div className="student-info">
                    <div>
                        <h4>3.77</h4>
                        <small>CGPA</small>
                    </div>
                    <div>
                        <h4>29</h4>
                        <small>Age</small>

                    </div>
                    <div>
                        <h4>630</h4>
                        <small>Practice</small>
                    </div>
                </div>
            </div>
            <div className="break-container">
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <button>5</button>
                    <button>10</button>
                    <button>15</button>
                    <button>20</button>
                    <button>30</button>

                </div>
            </div>
            <div className="practice-container">
                <h3>Practice Details </h3>
                <h5>Practice Time: <span>{total}</span> </h5>
                <br />
                <h5>Break Time: <span>{}</span> </h5>
                
            </div>
            <button className='complete-btn'> Lesson Completed</button>
            
        </div>
    );
};

export default Info;