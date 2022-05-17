import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './store/actions/counterActions';
import { useEffect } from 'react';
import { getUsers } from './store/actions/userActions';

function App() {
  // 1. siapkan selectornya
  // useSelector() bagian dari react-redux
  // useSelector ((state) => state.property) = tanpa combineReducer
  // useSelector ((state) => state.reducer.property) = dengan combineReducer
  const count = useSelector((state) => state.counter.count)
  const users = useSelector((state) => state.user.users)

  // 2. dispatch menggunakan useDispatch() => menerapkan React Hooks
  const dispatch = useDispatch()

  useEffect(() => {
    // untuk optimalnya kita gunakan action untuk dapat menggunakan function yang sama di dalam komponen yang berbeda
    dispatch(getUsers())
  },[])


  const increment = () => dispatch(incrementCounter())
  
  const decrement = () => dispatch({type: 'decrement'})
  
  const resetCounter = () => dispatch({type: 'reset'})
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        {/* siapkan 3 tombol */}
        <button onClick={increment}>Tambahkan</button>
        <button onClick={decrement}>Kurangkan</button>
        <button onClick={resetCounter}>Reset</button>

        {
          users.map((user, index) =>
          <>
          <div key={index}>
            {JSON.stringify(user)}
          </div>
          </> 
          )
        }
      </header>
    </div>
  );
}

export default App;
