/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const CounterDisplay = ({ count }) => {
    return <p className="text-2xl md:text-4xl mb-4 md:mb-8">Count: {count}</p>;
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
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-transparent'>
            <div className="flex-cols text-center w-full max-w-md md:max-w-lg p-4 md:p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Counter Component</h1>
                <CounterDisplay count={count} />
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0">
                    <button
                        onClick={handleIncrement}
                        className="bg-green-500 text-white px-4 md:px-6 py-2 rounded w-full md:w-36"
                    >
                        Increment
                    </button>
                    <button
                        onClick={handleDecrement}
                        className="bg-red-500 text-white px-4 md:px-6 py-2 rounded w-full md:w-36"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded w-full md:w-36"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
