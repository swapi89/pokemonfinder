import { useState } from "react";
import axios from "axios";
import PokemonData from "../PokemonData/PokemonData";
import styles from "./PokemonFinder.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import SocialShare from "../SocialShare/SocialShare";

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
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pokemon Finder</title>
        {/*<meta name="description" content="This is Pokemon Finder" />
        <meta name="keywords" content="pokemon, bulbasaur" />
        <meta name="og:title" content="Pokemon Finder" />
        <meta name="og:description" content="This is Pokemon Finder" />
        <meta
          name="og:url"
          content={
            typeof window !== "undefined" ? window.location.href : router.asPath
          }
        />
        <meta name="og:image" content="/images/channels4_profile.jpg" />*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pokemonfinder" />
        <meta name="twitter:title" content="Pokemon Finder" />

        <meta
          property="og:url"
          content={
            typeof window !== "undefined" ? window.location.href : router.asPath
          }
        />
        <meta property="og:title" content="Pokemon Finder" />
        <meta property="og:description" content="This is Pokemon Finder" />
        <meta
          property="og:image"
          content="https://cdn.finshots.app/images/2023/06/design-81-india.jpg"
        />
      </Head>
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
        <SocialShare />
      </div>
    </>
  );
}

export default PokemonFinder;
