import React, { useState } from "react";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount = 0);
    return(
    <>
    <div className="App">
        <div className="App-header">
            Count: {count}
                <div className="Container">
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </div>
        </div>
    </div>
    </>
    );
}


export default Counter;