import { createContext, useReducer, useState } from "react";
import pokemonAppReducer from "./PokemonAppReducer.js";
import { MainClient, EvolutionClient } from "pokenode-ts";

const PokemonAppContext = createContext();

const POKEAPI_URL = import.meta.env.VITE_POKEAPI_URL;

export const PokemonAppProvider = ({ children }) => {
  const initialState = {
    pokemonArray: [],
    pokemonPage: {},
  };

  const [pokemonList, setPokemonList] = useState([]);

  const [state, dispatch] = useReducer(pokemonAppReducer, initialState);

  //   Fetch pokemon
  const fetchPokemonName = async () => {
    // const response = await fetch(`${POKEAPI_URL}/pokemon/ditto`);

    // const { data } = await response.json();
    // console.log(data);

    const api = new MainClient();

    const data = await api.pokemon
      .listPokemons(0, 151)
      .then((item) => setPokemonList(item.results))
      .catch((error) => console.error(error));

    dispatch({
      type: "GET_POKEMON",
      payload: data,
    });
  };

  return (
    <PokemonAppContext.Provider
      value={{ ...state, fetchPokemonName, dispatch, pokemonList }}
    >
      {children}
    </PokemonAppContext.Provider>
  );
};

export default PokemonAppContext;
