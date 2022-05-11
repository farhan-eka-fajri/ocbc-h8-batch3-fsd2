import React, { useEffect, useState } from "react";

const Person = (props) => {

    // top level
    const [name, setName] = useState("")
    // useEffect => memanfaatkan 3 lifecyscle, implementasi lifecycle dari class component
    useEffect(() => {
        // componentDidMount() => component sudah dibuat/dirender
        // compoenentDidUpdate() => state berubah di dalam component
        setTimeout(() => {
            setName(props.name)

        }, 2000)
         // akan menjalankan effect

        // componentWillUnmount() => domponent akan dihancurkan
        // return bertindak sebagai cleanup
        // return () => {
        //     console.log("anda berhasil menghancurkan komponen!!!11!!111")
        // }
    },
    // shouldComponentUpdate()
    // kosong => useEffect akan berjalan selalu, 
    // [] => memaksa useEffect() untuk menajalankannya sekali saja
    // [variable] => useEffect() akan dijalankan setiap kali variable berubah
    // [props.name]
    Object.values(props)
    )

    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)
    // useEffect2 = ubah warna secara random
    useEffect(() => {
        setRed(Math.random() * 255)
        setGreen(Math.random() * 255)
        setBlue(Math.random() * 255)

    }, [name])


    //useEffect ke3 => fetch data lalu menyimpan didalam sebuah state
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    }, [] )

    function changeName(newName){
        setName(newName)
    }

    // bukan top level
    // if(true){
    //     doSomething()
    // }
    // bukan top level
    // function doSomething(){
    // }
    // bukan top level
    // for(let i =0;i<10;i++){

    // }

    // render
    return (
        <div style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
            <h2>Halo! Nama saya adalah {name}</h2>
            <h3>Pekerjaan saya adalah {props.job}</h3>
            {/* {JSON.stringify(users)} */}
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>Name: {user.name}</span> <br />
                            <span>Username: {user.username}</span> <br />
                            <span>Email: {user.email}</span>
                        </div>
                    )
                })
            }
            <button onClick={() => changeName("Farhan")}>Ganti Nama</button>
        </div>
    )
}

export default Person;