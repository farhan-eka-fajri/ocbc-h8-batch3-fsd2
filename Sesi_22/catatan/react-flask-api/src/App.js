

import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'


function App() {
  const [message, setMessage] = useState("")

  useEffect(
    () => {
      fetch('/hello')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setMessage(data.result)
      })
    },
    [] //hanya dijalankan 1x
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flask says <code>{message}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
