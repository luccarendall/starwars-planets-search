import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';
import fetchPlanets from './service/FetchAPI';

function Provider({ children }) {
  const INITIAL_STATE = {
    nome: 'Chewbacca',
    altura: 2.15,
    fraseFavorita: 'RRRAARRWHHGWWR',
  };

  const [state, setState] = useState(INITIAL_STATE);

  const contextValue = {
    state,
    setState,
    fetchPlanets,
  };

  console.log(contextValue);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
