import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ProtectedPage = () => {

    // ada 2 cara untuk navigasi secara programatis

    // <Navigate to=""/>
    // useNavigate()
    const navigate = useNavigate()

    useEffect(() => {

        // localStorage = API bawaan browser untuk menyimpan ddaa bertipe teks denan total maksimal 5mb
        // sessionStorage = sifatnya sementara
        // 3 cara penggunaan
        // localStorage.getItem(key) => akan mengembalikan value berdasarkan key yang kita input sebagai param
        // alternatifnya: localStorage[key]

    const authData =  localStorage.getItem('auth')

    if(!authData){
        console.error('anda belum login')
        navigate('/', {replace: true})
    }

    },[])

    return(
        <>
        <h2> ini adalah halaman terproteksi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis eaque exercitationem fugiat. Quo alias quaerat asperiores totam blanditiis non saepe, beatae magni quasi recusandae vero nobis ab facere sint?</p>
        </>
    )

}
export default ProtectedPage