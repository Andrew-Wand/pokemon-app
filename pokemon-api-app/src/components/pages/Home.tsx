import PokemonAppContext from "../context/PokemonAppContext";
import { useEffect, useContext } from "react";
import PokemonCard from "../layout/PokemonCard";

function Home() {
  return (
    <div>
      <PokemonCard />
    </div>
  );
}

export default Home;
