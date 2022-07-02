import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Table() {
  const context = useContext(myContext);
  const {
    filteredData,
    inputValue,
    numericFilters,
    filterOptions,
    handleTitleFilter,
    handleNumericFilter,
    handleDeleteFilter,
    handleDeleteAllFilters,
    handlerFilter,
    handlerOperator,
    handlerNumberInput,
    pesquisa,
    setOrderFilters,
    handleOrderBtn,
    orderSortOnclick,
  } = context;

  // Usado no botão de remover cada filtro. Novamente só aproveitei o que já funcionava e realoquei. Dessa vez peguei a informação a partir de um console.log na função do botão de filtrar
  const filtroUsado = pesquisa;

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
          {/* {filteredData.map((planets) => ( */}
          <select
            // key={ planets.name }
            id="filter"
            data-testid="column-filter"
            onChange={ handlerFilter }
          >
            {/* <option>{filterOptions[0]}</option>
            <option>{filterOptions[1]}</option>
            <option>{filterOptions[2]}</option>
            <option>{filterOptions[3]}</option>
            <option>{filterOptions[4]}</option> */}

            {/* Não sei se era pra fazer assim, mas como filterOptions já tava funcionando no estado (retirando o filtro selecionado) só troquei e renderizei ele na tela usando o map. Funcionou... */}
            {filterOptions.map((filter, index) => (
              <option
                key={ index }
              >
                { filter }
              </option>
            ))}
            {/* <option>{planets.orbital_period}</option>
            <option>{planets.diameter}</option>
            <option>{planets.rotation_period}</option>
            <option>{planets.surface_water}</option> */}
          </select>
          {/* ))} */}
        </label>

        <label htmlFor="operator">
          Operador:
          <select
            id="operator"
            data-testid="comparison-filter"
            onChange={ handlerOperator }
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
          onChange={ handlerNumberInput }
        />

        {/* BOTÃO DE FILTRAR */}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
        >
          Filtrar
        </button>

        {/* BOTÃO DE REMOVER FILTRO */}
        {numericFilters.map((filter, index) => (
          //    <button
          //    type="button"
          //    data-testid="filter"
          //    key={ `${filter.filter.type}-${index}` }
          //    onClick={ () => handleDeleteFilter(index) }
          //  >
          <div key={ index }>
            <span
              data-testid="filter"
            >
              {
                `${filtroUsado[0]} 
                 ${filtroUsado[1]} 
                 ${filtroUsado[2]}`
              }
              <button
                type="button"
                onClick={ () => handleDeleteFilter(index) && console.log(filter) }
              >
                X
              </button>
            </span>
          </div>))}
      </form>

      {/* BOTÃO DE REMOVER TODOS OS FILTROS */}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => handleDeleteAllFilters() }
      >
        Remover filtros
      </button>

      <form>
        <label htmlFor="filterColumns">
          Sort
          <select
            data-testid="column-sort"
            name="filterColumns"
            id="filterColumns"
            onChange={ ({ target }) => setOrderFilters(target.value) }
          >
            {/* mesmo map do "Filtrar por:" - linha 52, mudei o nome do filter pra conseguir usar dnv */}
            {filterOptions.map((newFilter, index) => (
              <option
                key={ index }
              >
                { newFilter }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ordem-crescente">
          Crescente
          <input
            data-testid="column-sort-input-asc"
            id="ordem-crescente"
            type="checkbox"
            value="ASC"
            onClick={ orderSortOnclick }
          />
        </label>
        <label htmlFor="ordem-descrescente">
          Decrescente
          <input
            data-testid="column-sort-input-desc"
            id="ordem-descrescente"
            type="checkbox"
            value="DESC"
            onClick={ orderSortOnclick }
          />
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ handleOrderBtn }
        >
          Sort
        </button>
      </form>

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
              <td data-testid="planet-name">{planets.name}</td>
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
