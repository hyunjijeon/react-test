// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { EditorRootReduxHooks } from './redux_hooks/editor-root';
// import { EditorRoot } from './redux/editor-root';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test ! 
        </p>

        <EditorRootReduxHooks/>

        {/* <EditorRoot/> */}

        {/* <ContextParent/> */}

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
