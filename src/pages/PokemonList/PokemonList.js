import React, { useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { usePokemonContext } from '../../contexts/PokemonContext';

const PokemonList = () => {
  const { state, dispatch } = usePokemonContext();

  useEffect(() => {
    dispatch({
      type: 'GET_POKEMON',
    });
  }, []);

  return (
    <div>
      {state.pokemonList.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          owned={pokemon.owned}
          key={pokemon.name}
          id={pokemon.id}
        />
      ))}
    </div>
  );
};

export default PokemonList;
