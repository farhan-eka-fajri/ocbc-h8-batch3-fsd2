// import logo from './logo.svg';
import AppStyle from './App.module.css';
import CardExternalStyle from './components/CardExternalStyle';
import './App.css';
import Button from './components/Button';
import Person from './components/Person';
import CardInLineStyle from './components/CardInLineStyle';
import CardObjectVariableStyle from './components/CardObjectVariableStyle';

function App() {
  // ini akan digunakan sebagai layout component
  return (
    <div className="App">
      {/* single tag */}
      <Button title =" FSD 2 OCBC BATCH 3" /> 
      <Button/>
      <header className="App-header">
      <CardInLineStyle />
      <CardObjectVariableStyle />

      <div className={AppStyle.center}>Test appstylemodule</div>


        <Person name="Alex" job="fullstack dev"/>
        <Person name="Dini" job="fullstack dev"/>
        <CardExternalStyle />
      </header>
    </div>


  );
}





export default App;
