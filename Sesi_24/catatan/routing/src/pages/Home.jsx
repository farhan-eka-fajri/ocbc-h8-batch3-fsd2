const Home = () => {

  const login = () => {
    // localStorage.setItem(key,value) untuk menyimpan data baru ke dalam key yang kita sebutkan di dalam parameter
    const user = {user: 'Farhan'}
    localStorage.setItem('auth', JSON.stringify(user))
  }

  const logout = () => {
    localStorage.removeItem('auth')
  }

    return(
    <>
         <h2>
          Edit <code>src/App.js</code> and save to reload.
        </h2>
          <button onClick={login}>login</button>
          <button onClick={logout}>logout</button>

    
    </>)
}

export default Home