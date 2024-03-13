import React, { useEffect, useState } from 'react';
import './Counter.css'
const Counter = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
//currentstatevalue,functionchangestatevalue
    const incrementCount = () => {
        setX(x+1);
    };
    const decrementCount=()=>{
        setY(y+1);
    }

    useEffect(function(){
        document.title="You clicked "+ x +" times";
    },[x])

    useEffect(function(){
        document.title="You clicked "+ y +" times";
    },[y])
    return (
        <div>
            <h1>Count: {x}</h1>
            <h1>Count: {y}</h1>
            <button onClick={incrementCount} className='btn'>Increment</button>
            <button onClick={decrementCount} className='btn'>Decrement</button>
        </div>
    );
};

export default Counter;
