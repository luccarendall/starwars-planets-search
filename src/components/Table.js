import React, { useEffect, useState } from 'react';

function Table() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [filterType, setFilterType] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);
  const [numericFilters, setNumericFilter] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const APIdata = await response.json();
      console.log(APIdata);
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
  };

  const handleNumericFilter = () => {
    const newNumericFilter = [
      filterType,
      operator,
      inputValue,
    ];
    setNumericFilter([...numericFilters, newNumericFilter]);
  };

  const handleDeleteFilter = (index) => {
    setNumericFilter(numericFilters.filter((_item, itemIndex) => itemIndex !== index));
  };

  // const filterBtn = () => {
  //   const filters = [column, operator, value];

  //   setFilterValues([...filterValues, filters]);
  //   const columnOptionsFilter = columnOptions.filter((filter) => filter !== column);
  //   setColumnOptions(columnOptionsFilter);
  // };

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Search"
          data-testid="name-filter"
          onChange={ handleTitleFilter }
        />
        <label htmlFor="filter">
          Filtrar por:
          <select
            id="filter"
            data-testid="column-filter"
            onChange={ ({ target }) => setFilterType(target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>

        <label htmlFor="operator">
          Operador:
          <select
            id="operator"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setOperator(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <input
          type="number"
          placeholder="0"
          value={ inputValue }
          data-testid="value-filter"
          onChange={ ({ target }) => setInputValue(target.value) }
        />

        {/* BOTÃO DE FILTRAR */}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
        >
          Filtrar
        </button>
      </form>

      {/* BOTÃO DE REMOVER FILTRO */}
      {numericFilters.map((filter, index) => (
        <button
          type="button"
          data-testid="button-remove-filters"
          key={ `${filter.filter.type}-${index}` }
          onClick={ () => handleDeleteFilter(index) }
        >
          {`${filter.filterType} ${filter.operator} ${filter.value}`}
        </button>))}

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {/* Lembrete: Se algum dos resultados fosse um array de objetos, usaria: {planets.films.map(films => name)} dentro do td, para com que cada objeto mostrasse apenas o nome do filme por exemplo */}
          {filteredData.map((planets) => (
            <tr key={ planets.name }>
              <td>{planets.name}</td>
              <td>{planets.rotation_period}</td>
              <td>{planets.orbital_period}</td>
              <td>{planets.diameter}</td>
              <td>{planets.climate}</td>
              <td>{planets.gravity}</td>
              <td>{planets.terrain}</td>
              <td>{planets.surface_water}</td>
              <td>{planets.population}</td>
              <td>{planets.films}</td>
              <td>{planets.created}</td>
              <td>{planets.edited}</td>
              <td>{planets.url}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </main>
  );
}

export default Table;
