import React from 'react';

const Counter = ({ increment, decrement, value }) => {
    return (
        <div>
            <button onClick={() => increment()}>+</button>
            {value}
            <button onClick={() => decrement()}>-</button>
        </div>
    );
};

export default Counter;