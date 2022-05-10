// import logo from './logo.svg';
import './App.css';


function Header(){
return(
  <header>
    <h1>Pengalaman Mengerjakan Frontend</h1>
  </header>
  );
}

function Content(){
return(
  <div className="content">
    <p>
      Pengalaman pengerjaan frontend menurut saya sejauh ini mungkin cukup baik, hanya saja saya merasa banyak yang kurang dari pribadi dan kadang merasa kurangnya waktu yang dibutuhkan bagi saya.
      Saya senang karena banyak konsep yang baru saya pelajari mengenai framework ataupun web secara keseluruhan.
    </p>
  </div>
  );
}

function Footer(){
return(
  <div className="footer">
    <p>&copy; My self 2022</p>
  </div>
  );
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />  
      </div>
    </div>
  );
}

export default App;
