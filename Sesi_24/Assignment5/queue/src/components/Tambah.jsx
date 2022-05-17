import React, { useState } from "react";

const Tambah = ({ addName }) => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addName(name)
    }
    return (
        <>
            <div className="inline-block">
                <form onSubmit={handleSubmit}>
                    <div className="submit">
                        <input className="input" type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button className="button is-info is-small">Tambahkan</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Tambah