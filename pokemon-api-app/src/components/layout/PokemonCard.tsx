import PokemonAppContext from "../context/PokemonAppContext";
import { useEffect, useContext } from "react";

function PokemonCard() {
  const { fetchPokemonName, pokemonList } = useContext(PokemonAppContext);

  useEffect(() => {
    fetchPokemonName();
  }, []);

  return (
    <div>
      {/* <img src={pokemonList} alt="derp" /> */}
      {pokemonList.map((item, index) => (
        <ul>
          <li>{item.name}</li>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt=""
          />
        </ul>
      ))}
    </div>
  );
}

export default PokemonCard;
