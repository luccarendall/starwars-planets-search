import React, { useContext } from 'react';
import myContext from '../context/myContext';
import '../style/table.css';

function Navbar() {
  const context = useContext(myContext);
  const {
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
    <nav>
      <form className="form" id="div1">
        <input
          type="text"
          placeholder="Search"
          data-testid="name-filter"
          onChange={ handleTitleFilter }
          className="input"
        />
        <label htmlFor="filter">
          Filtrar por:
          {' '}
          {''}
          {/* {filteredData.map((planets) => ( */}
          <select
            // key={ planets.name }
            id="filter"
            data-testid="column-filter"
            onChange={ handlerFilter }
            className="buttons"
          >
            {/* <option>{filterOptions[0]}</option>
            <option>{filterOptions[1]}</option>
            <option>{filterOptions[2]}</option>
            <option>{filterOptions[3]}</option>
            <option>{filterOptions[4]}</option> */}

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
          Escolha:
          {' '}
          {''}
          <select
            className="buttons"
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
          className="input"
        />

        {/* BOTÃO DE FILTRAR */}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
          className="buttons"
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
              className="span"
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

      <div className="form" id="div2">
        {/* BOTÃO DE REMOVER TODOS OS FILTROS */}
        <button
          type="button"
          className="removeAllFilters"
          data-testid="button-remove-filters"
          onClick={ () => handleDeleteAllFilters() }
        >
          Remover filtros
        </button>
      </div>

      <form className="form" id="div3">
        <label htmlFor="filterColumns">
          Ordenar por:
          {' '}
          {''}
          <select
            className="buttons"
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
          {' '}
          {''}
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
          {' '}
          {''}
          <input
            data-testid="column-sort-input-desc"
            className="checkbox-wrapper-24"
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
          className="buttons"
        >
          Aplicar
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
