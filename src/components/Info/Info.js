import React, { useEffect, useState } from 'react';
import profile from '../../image/Profile.png';

import './Info.css'
import Swal from 'sweetalert2';


const Info = (props) => {
    const [brTime, setBrTime] = useState('');

    useEffect(()=>{
        const storedBrTime = handleBrTime();
        const savedBrTime = JSON.stringify(storedBrTime);
        setBrTime(storedBrTime);
        console.log(savedBrTime);
    },[])

    const handleBrTime = (e) =>{
        localStorage.setItem('break-time', e);
    }

    const getStoredBrTime = () => {
        const storedTime = localStorage.getItem('break-time');
    }

    const {info} =props;
    let total = 0;
    for(const routine of info ){
        total = total + routine.time;
    }

    const handleCompleteBtn = () => {
        Swal.fire(
            'Good job!',
            'You Have Completed Your Daily Programming Practice!',
            'success'
        )
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
                    <button onClick={()=>handleBrTime(5)}>5</button>
                    <button onClick={()=>handleBrTime(10)}>10</button>
                    <button onClick={()=>handleBrTime(15)}>15</button>
                    <button onClick={()=>handleBrTime(20)}>20</button>
                    <button onClick={()=>handleBrTime(30)}>30</button>

                </div>
            </div>
            <div className="practice-container">
                <h3>Practice Details </h3>
                <h5>Practice Time: <span>{total}</span> </h5>
                <br />
                <h5>Break Time: <span>{brTime}</span> </h5>
                
            </div>
            <button onClick={handleCompleteBtn} className='complete-btn'> Lesson Completed</button>
            
        </div>
    );
};

export default Info;


