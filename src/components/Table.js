import React, { useContext } from 'react';
import myContext from '../context/myContext';
import '../style/table.css';

function Table() {
  const context = useContext(myContext);
  const {
    filteredData,
  } = context;

  return (
    <main>
      <table border="1" id="table">
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
