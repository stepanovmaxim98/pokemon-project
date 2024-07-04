import React from "react";
import useFetchPokemons from "../hooks/useFetchPokemon";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";


export default function PokemonList() {
  const {
    data: pokemons,
    loading,
    error,
  } = useFetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=40");

  if (loading && !pokemons.length) {
    return <Loader />;
  }

  if (error) {
    return <div>Erorr: {error.message}</div>;
  }
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
        />
      ))}
    </div>
  );

  return <div></div>;
}
