import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const changePage = () => navigate('/users')
    return(
        <>
        <h1>Ini adalah header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius dignissimos consequatur voluptatibus vel dolorum, voluptatum asperiores eligendi similique nam alias consequuntur cumque, fuga ab eum. Suscipit explicabo dolorum libero?</p>
        <button onClick={changePage}>List Users</button>
        </>
    )
}
export default Home