import React, { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    });

    return(
        <div className="App">
            <div className="App-header">
                 <div className="Container">
                    <p>Anda menekan sebanyak {count} kali</p>
                    <button onClick={() => setCount(count + 1)}> klik saya</button>
                </div>
            </div>
        </div>
    )
};

export default Example;