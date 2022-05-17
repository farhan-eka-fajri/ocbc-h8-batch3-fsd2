import { Routes, Route, NavLink } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import NotFound from './pages/NotFound';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  const activeStyle = {
     fontWeight: 700,
     color: 'yellow' 
  }
  const inacvtiveStyle = {color: 'white'}
  const checkIsActive = ({isActive}) => isActive ? activeStyle : inacvtiveStyle

  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <NavLink to={"/"} style={checkIsActive}>Home</NavLink>
            <NavLink to={"/profile"} style={checkIsActive}>Profile</NavLink>
            <NavLink to={"/protected"} style={checkIsActive}>Protected</NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path='' element={<Home />} />
          {/* ada 2 cara untuk me render routenya 
          1. parent route dengan elemen berguna ketika kita ingin melihat detail dari data tertentu yang sifatnya kompleks
          contoh : user details berikut dengan Transaksi, Informasi User
          
          2. parent route tanpa element berguna sebagai navigasi utama
          contoh: route utamanya User, lalu berisi beberpa child route :
          "/users" => User list
          "/users/:id" => User details berdasarkan IDnya

          */}



        <Route path='profile' element={<Profile/>}>


        {/* child routes nested routes */}
          <Route path='asal' element={<ProfileDetails/>}/>
          {/* <Route path ="profile/:name" element={<Profile/>}> */}
          <Route path=':name' element={<Profile/>}/>

        {/* harus tambahkan <Outlet /> didalam element parent*/}

        {/* routing dengan dynamic parameters */}
        {/* sintaks :namaParam */}


        </Route>

        <Route path='/protected' element={<ProtectedPage/>}/>

        {/* routing dengan star segment (wildcard) mereplace */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
