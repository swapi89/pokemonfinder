import styles from "./PokemonDetails.module.css";

function PokemonDetails({ data }) {
  return data?.name ? (
    <div className={styles.detailContainer}>
      <h2>Pokemon: {data?.name}</h2>
      <img src={data?.sprites?.front_default} alt={data?.name} />
      <section>
        <p>
          <b>Abilities:</b>{" "}
          {data?.abilities?.reduce((acc, ability) => {
            return acc
              ? `${acc}, ${ability?.ability?.name}`
              : ability?.ability?.name;
          }, "")}
        </p>
        <p>
          <b>Stats:</b>{" "}
          {data?.stats?.reduce((acc, stat) => {
            return acc ? `${acc}, ${stat?.stat?.name}` : stat?.stat?.name;
          }, "")}
        </p>
        <p>
          <b>Held Items:</b>{" "}
          {data?.held_items?.reduce((acc, heldItem) => {
            return acc
              ? `${acc}, ${heldItem?.item?.name}`
              : heldItem?.item?.name;
          }, "")}
        </p>
      </section>
    </div>
  ) : null;
}
export default PokemonDetails;
