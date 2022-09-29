import React from 'react';
import './Routine.css';

const Routine = (props) => {
    const {handleAddToList,routine}= props;
    const { subject, image, description, time } = routine;
    return (
        <div className='routine'>
            <img src={image} alt="" />
            <div className="routine-info">
                <p className='practice-topic'>Topic: {subject}</p>
                <p><strong>Description</strong>  : <small>{description}</small></p>
                <p><strong>Practice Time: {time}</strong> <small>minutes</small></p>
            </div>
            <button onClick={()=> handleAddToList(routine)} className='btn-add'> Add to List</button>

        </div>
    );
};

export default Routine;