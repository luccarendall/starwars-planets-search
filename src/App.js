import React from 'react';
import './App.css';
import Provider from './context/myProvider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <span>Componente App</span>
        <br />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
