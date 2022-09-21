import { useState } from "react";
import axios from "axios";
import PokemonData from "../PokemonData/PokemonData";
import styles from "./PokemonFinder.module.css";

function PokemonFinder() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchButtonClick = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase().trim()}`
      )
      .then((response) => {
        if (response.status === 200) {
          setError("");
          setData(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) setError(error.response.data);
      });
  };

  return (
    <div className={styles.app}>
      <h1>Pokemon Finder</h1>
      <div>
        <input
          type="search"
          id="pokemon-search"
          name="pokemon-search"
          placeholder="Search For Pokemon"
          value={searchValue}
          onChange={searchChangeHandler}
        />
        <button onClick={searchButtonClick} className={styles.searchButton}>
          Search
        </button>
      </div>
      <PokemonData data={data} error={error} />
    </div>
  );
}

export default PokemonFinder;
