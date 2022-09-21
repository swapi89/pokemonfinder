import styles from "./PokemonDetails.module.css";

function PokemonDetails({ data }) {
  return data?.name ? (
    <div className={styles.detailContainer}>
      <h2>Pokemon: {data?.name}</h2>
      <img src={data?.sprites?.front_default} alt={data?.name} />
      <section>
        <p>
          <b>Abilities:</b>{" "}
          {data?.abilities?.length
            ? data?.abilities?.reduce((acc, ability) => {
                return acc
                  ? `${acc}, ${ability?.ability?.name}`
                  : ability?.ability?.name;
              }, "")
            : "N/A"}
        </p>
        <p>
          <b>Stats:</b>{" "}
          {data?.stats?.length
            ? data?.stats?.reduce((acc, stat) => {
                return acc ? `${acc}, ${stat?.stat?.name}` : stat?.stat?.name;
              }, "")
            : "N/A"}
        </p>
        <p>
          <b>Held Items:</b>{" "}
          {data?.held_items?.length
            ? data?.held_items?.reduce((acc, heldItem) => {
                return acc
                  ? `${acc}, ${heldItem?.item?.name}`
                  : heldItem?.item?.name;
              }, "")
            : "N/A"}
        </p>
      </section>
    </div>
  ) : null;
}
export default PokemonDetails;
