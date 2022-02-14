import React from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { usePokemonContext } from '../../utils/PokemonContext';

const PokemonList = () => {
  const { state } = usePokemonContext();
  return (
    <div>
      {state.pokemonList.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          owned={pokemon.owned}
          key={pokemon.name}
        />
      ))}
    </div>
  );
};

export default PokemonList;
