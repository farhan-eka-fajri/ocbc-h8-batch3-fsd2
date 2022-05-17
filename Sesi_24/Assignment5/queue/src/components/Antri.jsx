import React, { useState } from "react"
import Tambah from "./Tambah";

function Antri() {
    const [names, setNames] = useState([
        {
            name: ''
        }
    ])

    const addName = (name) => {
        setNames([...names, { name }])
    }

    const fwdName = (name) => {
        var array = [...names];
        array.splice(name, 1)
        setNames(array)
    }

    return (
        <>
            <div className="Card">
                <div className="Header">
                    <h1>A Queue!</h1>
                </div>
                <hr />
                <label>
                    <p>Input a Name:</p>
                    <Tambah addName={addName} />
                    {names.length > 2 && <button onClick={fwdName} className="button is-warning is-small">Majukan!</button>}
                </label>
                <hr />
                <label>{
                    <p>Queue:</p>}
                </label>
                {names.length > 0 && names.map((element, index) => {
                    return index > 0 ? <div className="PerName" key={index}><ul>{element['name']}</ul></div>:''
                })}
            </div>
        </>
    )
}
export default Antri