import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Person from './components/Person';

function App() {
  // ini akan digunakan sebagai layout component
  return (
    <div className="App">
      {/* single tag */}
      <Button title =" FSD 2 OCBC BATCH 3" /> 
      <Button/>
      <header className="App-header">
        <Person name="Alex" job="fullstack dev"/>
        <Person name="Dini" job="fullstack dev"/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
