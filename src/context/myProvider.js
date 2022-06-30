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
  const [pesquisa, setPesquisa] = useState([]); // minha vó escolheu o nome desse estado kk ela tava olhando e quis fazer ela participar

  // Fetch da API, pegando a chave results
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      console.log(APIdata.results);
      const xablau = APIdata.results;
      // // Slice pra retornar apenas 8 planetas (se mostrou desnecessário depois)
      // const OITO = 8;
      // const planetSlice = xablau.slice(0, OITO);
      // console.log(planetSlice);
      setData(xablau);
      setFilteredData(xablau);
    };
    fetchPlanets();
  }, []);

  // O useEffect aq vai executar uma função (primeiro parâmetro(antes da virgula)) sempre que algo mudar. Nesse caso o que vai mudar é o titleFilter que recebe o valor que a gente coloca no input
  useEffect(() => {
    const filteredPlanets = data.filter(
      (planets) => planets.name.toLowerCase()
        .includes(titleFilter),
    );

    // aqui vamos percorrer o acumulador, que inicialmente pega o filteredPlanets, e vamos acumular os filtros numericos usados.
    const setFilters = numericFilters.reduce(
      (acumulador, filter) => acumulador.filter((planets) => {
        // Glórias meu deus, 3 dias tentando fazer isso funcionar!!!
        switch (filter[1]) {
        case 'maior que':
          return planets[filter[0]] > Number(filter[2]);
        case 'menor que':
          return planets[filter[0]] < Number(filter[2]);
        case 'igual a':
          return planets[filter[0]] === filter[2];
        default:
          return planets;
        }
      }), filteredPlanets,
    );
    setFilteredData(setFilters);
  }, [titleFilter, numericFilters, data]);

  // filtro contínuo de título
  const handleTitleFilter = ({ target }) => {
    setTitleFilter(target.value.toLowerCase());
  // console.log('handleTitleFilter funcionou');
  };

  // handle para controlar o botão de filtragem
  const handleNumericFilter = () => {
    const newNumericFilter = [filterType, operator, inputValue];
    setNumericFilter([...numericFilters, newNumericFilter]);
    const filtersArray = filterOptions.filter((filter) => filter !== filterType);
    setFilterOptions(filtersArray);
    setPesquisa(newNumericFilter);

    console.log('handleNumericFilter funcionou', newNumericFilter);
  };

  // apenas pega o valor
  const handlerFilter = ({ target }) => {
    setFilterType(target.value);
  };

  // Botão de deletar filtros
  const handleDeleteFilter = (index) => {
    setNumericFilter(numericFilters.filter((_item, itemIndex) => itemIndex !== index));
  // console.log('handleDeleteFilter funcionou');
  };

  // Literalmente remove todos os filtros (seta o array como vazio)
  const handleDeleteAllFilters = () => {
    setNumericFilter([]);
    // console.log('handleDeleteAllFilters funcionou');
  };

  // apenas pega o valor
  const handlerOperator = ({ target }) => {
    setOperator(target.value);
  };

  // apenas pega o valor
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
    pesquisa,
    handleTitleFilter,
    handleNumericFilter,
    handleDeleteFilter,
    handleDeleteAllFilters,
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
