import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function About(){

    let { name } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${name}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
    },[])

    return(
        <>
        console.log(data)
        <h3>Hallo {user.name}</h3>
        <p>{user.state.name}</p>

        </>

        
    )



}

export default About