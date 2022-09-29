import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className='faq-container'>
            <h1> FAQ</h1>
            <div className='qus-container'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='qus-container'>
                <h3>What is the difference between Props and state?</h3>
                <p> State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='qus-container'>
                <h3>what does useeffect do except data fetching?</h3>
                <p> Except data fetching. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Faq;