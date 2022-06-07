import React from 'react';
import './App.css';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
    </Provider>
  );
}

export default App;
