// import React from 'react';
// import './App.css';
// import Clock from './components/Clock';
// import ClockClass from './components/ClockClass';

// function App() {
//   return (
//     <>
//       <ClockClass />
//       <Clock />
//     {/* <div className="App">

//       <header className="App-header">

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
//     </>
//   );

// }


// export default App;


import React, { useState } from 'react';
import './App.css';

function Clock() {
  const [date, setDate] = useState(new Date())

  function tick() {
    setDate(new Date())
  }

  setInterval(() => tick(), 1000)

  return (
    <div className="App">
      <h1>Realtime Clock Function</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>

  );
}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="App">
        <h1>Realtime Clock Class</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1> <br />
        <Clock />
      </div>
    );
  }
}

export default App;