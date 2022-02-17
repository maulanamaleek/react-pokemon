import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { GET_POKEMON } from '../../graphql/gql';
import PokemonDetailCard from '../../components/PokemonDetailCard/PokemonDetailCard';
import CatchPokemon from './CatchPokemon';

const PokemonDetail = () => {
  const [catching, setCatching] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  const { state, dispatch } = usePokemonContext();
  const { id } = useParams();
  const { data } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  useEffect(() => {
    // setTimeout(() => {
    // if (data) {
    console.log(data);
    dispatch({
      type: 'POKEMON_DETAIL',
      payload: data?.pokemon_v2_pokemon,
    });
    // }
    // }, 2000);
  }, [data]);

  // if (data && loading) {
  //   dispatch({ type: 'POKEMON_DETAIL', payload: data.pokemon_v2_pokemon });
  //   setLoading(false);
  // }

  if (catching) {
    return (
      <CatchPokemon
        id={state?.selectedPokemon?.id}
        photo={state?.selectedPokemon?.photo}
        name={state?.selectedPokemon?.name}
      />
    );
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '90vw',
    }}
    >

      {state?.selectedPokemon?.types && (
        <PokemonDetailCard
          name={state?.selectedPokemon.name}
          types={state?.selectedPokemon.types}
          // description={state?.selectedPokemon.description}
          photo={state?.selectedPokemon.photo}
          moves={state?.selectedPokemon.moves}
          onCatch={setCatching}
        />
      )}

    </div>
  );
};

export default PokemonDetail;
