// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { ParentComponent } from './test/example01/parent';
import { ParentSolution01 } from './test/example01/parent-solution01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test ! 
        </p>
        <ParentSolution01/>
        {/* <ParentComponent /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
