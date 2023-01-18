import planetsAPI from '../context/services/FetchAPI';
// Lógica e ideia original para resolução desse problema extraidas de: https://github.com/Guga-Santos/Starwars-search-trybe
const NEGATIVE = -1;

export default async function useFetch(setData) {
  const response = await planetsAPI();
  const infos = response.results;

  setData(infos.sort((a, b) => {
    if (a.name < b.name) {
      return NEGATIVE;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }));
}
