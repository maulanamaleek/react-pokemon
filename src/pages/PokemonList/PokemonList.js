import React from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const PokemonList = () => {
  const list = [
    { name: 'Pikachu', owned: 2 },
    { name: 'Bulbasaur', owned: 0 },
    { name: 'Metapod', owned: 11 },
    { name: 'Charizard', owned: 1 },
    { name: 'Lucario', owned: 2 },
  ];
  return (
    <div>
      {list.map((pokemon) => (
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
