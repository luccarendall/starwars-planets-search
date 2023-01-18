import React from 'react';
import './App.css';
import Provider from './context/myProvider';
import Table from './components/Table';
import NavBar from './components/NavBar';

function App() {
  return (
    <Provider>
      <div>
        <NavBar />
        <br />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
