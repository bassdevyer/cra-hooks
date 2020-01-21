import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  // The only argument to useState is the initial state. It is 0 because our counter starts from zero. 
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
