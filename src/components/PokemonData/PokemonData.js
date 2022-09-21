import PokemonDetails from "../PokemonDetails/PokemonDetails";

function PokemonData({ data, error }) {
  return error ? <h2>Pokemon Not Found</h2> : <PokemonDetails data={data} />;
}

export default PokemonData;
