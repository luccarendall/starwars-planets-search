import React, { useContext } from 'react';
import myContext from '../context/myContext';
import '../style/navbar.css';

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
          <select
            id="filter"
            data-testid="column-filter"
            onChange={ handlerFilter }
            className="buttons"
          >

            {filterOptions.map((filter, index) => (
              <option
                key={ index }
              >
                { filter }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="operator">
          Escolha:
          {' '}
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
          Filter
        </button>
      </form>

      <div className="AppliedFiltersDiv">
        {/* BOTÃO DE REMOVER FILTRO */}
        {numericFilters.map((filter, index) => (
          <div key={ index }>
            <br />
            <br />

            <span
              data-testid="filter"
              className="AppliedFilters"
            >
              {
                `${filtroUsado[0]} 
                 ${filtroUsado[1]} 
                 ${filtroUsado[2]}`
              }
              <button
                type="button"
                onClick={ () => handleDeleteFilter(index) && console.log(filter) }
                className="removeFilterButton"
              >
                ✖
              </button>
            </span>
          </div>))}
      </div>

      <div className="form" id="div2">
        {/* BOTÃO DE REMOVER TODOS OS FILTROS */}
        <button
          type="button"
          className="removeAllFilters"
          data-testid="button-remove-filters"
          onClick={ () => handleDeleteAllFilters() }
        >
          Remove filters
        </button>
      </div>

      <form className="form" id="div3">
        <label htmlFor="filterColumns">
          Order by:
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
          Ascending
          {' '}
          <input
            data-testid="column-sort-input-asc"
            id="ordem-crescente"
            type="checkbox"
            value="ASC"
            onClick={ orderSortOnclick }
          />
        </label>
        <label htmlFor="ordem-descrescente">
          Descending
          {' '}
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
          Sort
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
