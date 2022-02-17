import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { GET_POKEMON_LIST } from '../../graphql/gql';

const PokemonList = () => {
  const { state, dispatch } = usePokemonContext();
  const { data } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 30, offset: 0 },
  });

  useEffect(() => {
    dispatch({
      type: 'GET_POKEMON',
      payload: data?.pokemon_v2_pokemonspecies,
    });
  }, [data]);

  return (
    <div>
      {state?.pokemonList?.map((pokemon) => (
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
