import React from 'react';
import Info from '../Info/Info';
import Routine from '../Routine/Routine';
import { useEffect, useState } from 'react';
import './Main.css'


const Main = () => {

    const [routines,setRoutines] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetch('routine.json')
        .then(res => res.json())
        .then(data => setRoutines(data))
        
    },[])

    const handleAddToList = (routine)=> {
        const newInfo = [...info, routine];
        setInfo(newInfo);
    }

    return (
        <div className='main-container'>
            <div className="routine-container">
                {
                    routines.map(routine =><Routine 
                    key={routine.id}
                    routine={routine}
                    handleAddToList={handleAddToList}
                    ></Routine> )
                }
                
            </div>
            <div className="info-container">
                <Info info={info}></Info>
            </div>
        </div>
    );
};

export default Main;