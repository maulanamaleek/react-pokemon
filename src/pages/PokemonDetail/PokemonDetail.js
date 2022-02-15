import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetailCard from '../../components/PokemonDetailCard/PokemonDetailCard';
import CatchPokemon from './CatchPokemon';

const PokemonDetail = () => {
  const [catching, setCatching] = React.useState(false);
  const { id } = useParams();
  const detail = {
    name: 'Charizard',
    id,
    type: 'Fire',
    description: 'Charizard is a fire pokemon',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    moves: [1, 2, 3],
  };

  if (catching) return <CatchPokemon id={detail.id} photo={detail.photo} />;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '90vw',
    }}
    >
      <PokemonDetailCard
        name={detail.name}
        type={detail.type}
        description={detail.description}
        photo={detail.photo}
        moves={detail.moves}
        onCatch={setCatching}
      />
    </div>
  );
};

export default PokemonDetail;
