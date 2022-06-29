import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [filterType, setFilterType] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);
  const [numericFilters, setNumericFilter] = useState([]);
  const [filterOptions, setFilterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // Fetch da API, pegando a chave results
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      console.log(APIdata.results);
      setData(APIdata.results);
      setFilteredData(APIdata.results);
    };
    fetchPlanets();
  }, []);

  // O useEffect aq vai executar uma função (primeiro parâmetro(antes da virgula)) sempre que algo mudar. Nesse caso o que vai mudar é o titleFilter que recebe o valor que a gente coloca no input
  useEffect(() => {
    const filteredPlanets = data.filter(
      (planets) => planets.name.toLowerCase().includes(titleFilter),
    );

    // aqui vamos percorrer o acumulador, que inicialmente pega o filteredPlanets, e vamos acumular os filtros numericos usados.
    setFilteredData(numericFilters.reduce(
      (acumulador, filter) => acumulador.filter((planets) => {
        switch (filter.operator) {
        case 'maior que':
          return planets[filter.filterType] > Number(filter.value);
        case 'menor que':
          return planets[filter.filterType] < Number(filter.value);
        case 'igual a':
          return planets[filter.filterType] === Number(filter.value);
        default:
          return true;
        }
      }), filteredPlanets,
    ));
  }, [titleFilter, numericFilters, data]);

  const handleTitleFilter = ({ target }) => {
    setTitleFilter(target.value.toLowerCase());
  // console.log('handleTitleFilter funcionou');
  };

  // handle para controlar o botão de filtragem
  const handleNumericFilter = () => {
    const newNumericFilter = [filterType, operator, inputValue];
    setNumericFilter([...numericFilters, newNumericFilter]);
    const selectedFilter = filterOptions.filter((filter) => filter !== filterType);
    setFilterOptions(selectedFilter);

    console.log('handleNumericFilter funcionou');
  };

  // Botão de deletar filtros
  const handleDeleteFilter = (index) => {
    setNumericFilter(numericFilters.filter((_item, itemIndex) => itemIndex !== index));
  // console.log('handleDeleteFilter funcionou');
  };

  const handlerFilter = ({ target }) => {
    setFilterType(target.value);
  };

  const handlerOperator = ({ target }) => {
    setOperator(target.value);
  };

  const handlerNumberInput = ({ target }) => {
    setInputValue(target.value);
  };

  const contextValue = {
    data,
    filteredData,
    titleFilter,
    filterType,
    operator,
    inputValue,
    numericFilters,
    filterOptions,
    handleTitleFilter,
    handleNumericFilter,
    handleDeleteFilter,
    handlerFilter,
    handlerOperator,
    handlerNumberInput,
  };

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
