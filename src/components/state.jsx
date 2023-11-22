/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const CounterDisplay = ({ count }) => {
    return <p className="text-4xl m-8">Count: {count}</p>;
};

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <> <div className='flex justify-center bg-gradient-to-r from-blue-500 to-transparent h-screen '>
            <div className="text-center w-1/2 mt-52 h-56 rounded bg-pink-200">
                <h1 className="text-3xl font-bold mb-4 mt-2">Counter Component</h1>
                <CounterDisplay count={count} />
                <button
                    onClick={handleIncrement}
                    className="bg-green-500  text-white px-8 py-2 rounded mr-2 mt-6"
                >
                    Increment
                </button>
                <button
                    onClick={handleDecrement}
                    className="bg-red-500 text-white px-8 py-2 rounded mr-2"
                >
                    Decrement
                </button>
                <button
                    onClick={handleReset}
                    className="bg-blue-500 text-white px-8 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
        </>
    );
};

export default Counter;
