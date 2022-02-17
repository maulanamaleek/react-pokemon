import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { GET_POKEMON } from '../../graphql/gql';
import PokemonDetailCard from '../../components/PokemonDetailCard/PokemonDetailCard';
import CatchPokemon from './CatchPokemon';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const PokemonDetail = () => {
  const [catching, setCatching] = React.useState(false);
  const { state, dispatch } = usePokemonContext();
  const { id } = useParams();
  const { data } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  useEffect(() => {
    dispatch({
      type: 'POKEMON_DETAIL',
      payload: data?.pokemon_v2_pokemon,
    });
  }, [data]);

  if (!data) return <LoadingSpinner />;

  if (catching) {
    return (
      <CatchPokemon
        id={state?.selectedPokemon?.id}
        photo={state?.selectedPokemon?.photo}
        name={state?.selectedPokemon?.name}
        types={state?.selectedPokemon.types}
      />
    );
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {state?.selectedPokemon?.types && (
        <PokemonDetailCard
          name={state?.selectedPokemon.name}
          types={state?.selectedPokemon.types}
          photo={state?.selectedPokemon.photo}
          moves={state?.selectedPokemon.moves}
          onCatch={setCatching}
        />
      )}

    </div>
  );
};

export default PokemonDetail;
